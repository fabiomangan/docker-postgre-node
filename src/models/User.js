import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export const createUser = async userData => {
  return await prisma.users.create({
    data: userData,
  });
};

export const getAllUsers = async () => {
  return await prisma.users.findMany();
};

export const getUserById = async id => {
  return await prisma.users.findUnique({
    where: { id },
  });
};

export const updateUser = async (id, updateData) => {
  return await prisma.users.update({
    where: { id },
    data: updateData,
  });
};

export const deleteUser = async id => {
  return await prisma.users.delete({
    where: { id },
  });
};
