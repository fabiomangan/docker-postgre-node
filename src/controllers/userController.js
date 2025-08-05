import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const createUser = (req, res) => {
  res.status(200).json({ message: 'Rodando' });
};

export const getAllUsers = (req, res) => {
  res.status(200).json({ message: 'Rodando' });
};

export const deleteUser = (req, res) => {
  res.status(200).json({ message: 'Rodando' });
};
