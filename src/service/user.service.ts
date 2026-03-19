import { prisma } from "config/client";

const handleCreateUser = async (
  fullname: string,
  email: string,
  address: string,
) => {
  return prisma.user.create({
    data: {
      name: fullname,
      email,
      address,
    },
  });
};

const getAllUsers = async () => {
  return prisma.user.findMany();
};

const handleDeleteUser = async (id: string) => {
  return prisma.user.delete({
    where: { id: Number(id) },
  });
};

const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id: Number(id) },
  });
};

const updateUserById = async (
  id: string,
  fullName: string,
  email: string,
  address: string,
) => {
  return prisma.user.update({
    where: { id: +id },
    data: {
      name: fullName,
      email,
      address,
    },
  });
};

export {
  handleCreateUser,
  getAllUsers,
  handleDeleteUser,
  getUserById,
  updateUserById,
};
