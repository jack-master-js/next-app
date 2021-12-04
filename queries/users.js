import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getUsers = () => {
    return prisma.user.findMany();
};
