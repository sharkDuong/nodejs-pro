import { prisma } from "config/client";
import { Request, Response } from "express";
import {
  getAllUsers,
  handleCreateUser,
  handleDeleteUser,
  getUserById,
  updateUserById,
} from "service/user.service";

const getHomePage = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  return res.render("home", { users });
};

const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create-user");
};

const postCreateUserPage = async (req: Request, res: Response) => {
  const { fullname, email, address } = req.body;
  await handleCreateUser(fullname, email, address);
  return res.redirect("/");
};

const postDeleteUserPage = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  await handleDeleteUser(id);
  return res.redirect("/");
};

const getViewUser = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const user = await getUserById(id);
  return res.render("view-user", { id, user });
};

const postUpdateUserPage = async (req: Request, res: Response) => {
  const { id, email, address, fullName } = req.body;
  await updateUserById(id, fullName, email, address);
  return res.redirect("/");
};

export {
  getHomePage,
  getCreateUserPage,
  postCreateUserPage,
  postDeleteUserPage,
  getViewUser,
  postUpdateUserPage,
};
