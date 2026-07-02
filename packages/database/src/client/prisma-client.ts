import { PrismaClient } from '@prisma/client';

let prismaInstance: PrismaClient | null = null;

export function getPrismaClient(): PrismaClient {
  if (!prismaInstance) {
    const isProd = process.env.NODE_ENV === 'production';
    
    prismaInstance = new PrismaClient({
      log: isProd 
        ? ['error'] 
        : ['query', 'info', 'warn', 'error'],
    });
  }
  
  return prismaInstance;
}

/**
 * Safely disconnects the global Prisma client instance.
 */
export async function disconnectPrisma(): Promise<void> {
  if (prismaInstance) {
    await prismaInstance.$disconnect();
    prismaInstance = null;
  }
}
