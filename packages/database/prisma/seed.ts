import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  
  // Seed initial system metadata
  await prisma.systemMetadata.upsert({
    where: { key: 'platform_initialized' },
    update: {},
    create: {
      key: 'platform_initialized',
      value: 'true',
    },
  });

  console.log('Database seeding completed successfully.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
