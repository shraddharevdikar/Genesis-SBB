import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seeding...');

  // 1. Seed SystemMetadata
  await prisma.systemMetadata.upsert({
    where: { key: 'platform_initialized' },
    update: {},
    create: {
      key: 'platform_initialized',
      value: 'true',
    },
  });

  // 2. Seed Demo Tenant
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'demo-tenant' },
    update: {
      name: 'Demo Tenant Inc.',
      status: 'ACTIVE',
    },
    create: {
      name: 'Demo Tenant Inc.',
      slug: 'demo-tenant',
      status: 'ACTIVE',
    },
  });
  console.log(`Seeded Tenant: ${tenant.name} (${tenant.id})`);

  // 3. Seed Demo Organization
  const org = await prisma.organization.create({
    data: {
      tenantId: tenant.id,
      name: 'Genesis Main Org',
      industry: 'Technology',
      timezone: 'UTC',
      currency: 'USD',
    },
  }).catch(async (e) => {
    // If already exists, find it
    return prisma.organization.findFirst({
      where: { tenantId: tenant.id, name: 'Genesis Main Org' },
    }) as any;
  });
  console.log(`Seeded Organization: ${org.name} (${org.id})`);

  // 4. Seed Admin Role
  const adminRole = await prisma.role.create({
    data: {
      organizationId: org.id,
      name: 'Administrator',
      description: 'Full system administration privileges',
    },
  }).catch(async () => {
    return prisma.role.findFirst({
      where: { organizationId: org.id, name: 'Administrator' },
    }) as any;
  });
  console.log(`Seeded Role: ${adminRole.name} (${adminRole.id})`);

  // 5. Seed Default Permissions
  const permissionKeys = [
    { key: 'users:read', description: 'Read user list' },
    { key: 'users:write', description: 'Create and update users' },
    { key: 'users:delete', description: 'Soft delete users' },
    { key: 'org:settings', description: 'Manage organization settings' },
    { key: 'audit:read', description: 'View audit logs' },
  ];

  const permissions = [];
  for (const perm of permissionKeys) {
    const p = await prisma.permission.upsert({
      where: { key: perm.key },
      update: { description: perm.description },
      create: {
        key: perm.key,
        description: perm.description,
      },
    });
    permissions.push(p);
  }
  console.log(`Seeded ${permissions.length} default permissions.`);

  // 6. Seed Demo Admin User
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@genesis-sbb.com' },
    update: {
      firstName: 'Genesis',
      lastName: 'Admin',
      status: 'ACTIVE',
    },
    create: {
      organizationId: org.id,
      email: 'admin@genesis-sbb.com',
      firstName: 'Genesis',
      lastName: 'Admin',
      passwordHash: '$2b$12$6Kx1q9e5bZJ5H88A1rL1eO1A8nSgU1n39gG7Z7h8q6q6w6w6w6w6w', // mock bcrypt hash
      status: 'ACTIVE',
    },
  });
  console.log(`Seeded Demo Admin User: ${adminUser.email} (${adminUser.id})`);

  // 7. Associate Admin User with Admin Role
  await prisma.userRole.upsert({
    where: {
      userId_roleId: {
        userId: adminUser.id,
        roleId: adminRole.id,
      },
    },
    update: {},
    create: {
      userId: adminUser.id,
      roleId: adminRole.id,
    },
  });
  console.log(`Associated user ${adminUser.email} with role ${adminRole.name}`);

  // 8. Seed a demo Audit Log entry
  await prisma.auditLog.create({
    data: {
      actorId: adminUser.id,
      entity: 'Platform',
      entityId: tenant.id,
      action: 'INITIAL_SEED',
      payload: {
        message: 'Successfully seeded platform base models',
        timestamp: new Date().toISOString(),
      },
    },
  });
  console.log('Seeded initial AuditLog entry');

  console.log('Database seeding completed successfully.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Error during database seeding:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
