import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export function getUsers() {
    return prisma.user.findMany();
}
