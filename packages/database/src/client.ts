import { getPrismaClient } from './client/prisma-client.js';

export const db = getPrismaClient();
export const prisma = db;
