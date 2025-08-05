import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

// Criar usuário
export const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const newUser = await prisma.users.create({
      data: {
        name,
        email,
        age: parseInt(age),
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
};

//Listar Todos os usuários
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.users.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
};

// Deletar usuários pelo ID
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.users.findUnique({
      where: { id: parseInt(id) },
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    await prisma.users.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: 'Usuário deletado com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    res.status(500).json({ error: 'Erro ao deletar usuário.' });
  }
};
