import { Request, Response } from "express";
import {
  getAllUsers,
  handleCreateUser,
  handleDeleteUser,
  getUserById,
} from "service/user.service";

const getHomePage = async (req: Request, res: Response) => {
  //get users
  const users = await getAllUsers();

  return res.render("home", {
    users: users,
  });
};

const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create-user");
};

const postCreateUserPage = async (req: Request, res: Response) => {
  const { fullname, email, address } = req.body;
  //handle
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
  //get user by id
  const user = await getUserById(id);
  return res.render("view-user.ejs", {
    id: id,
    user: user,
  });
};
export {
  getHomePage,
  getCreateUserPage,
  postCreateUserPage,
  postDeleteUserPage,
  getViewUser,
};
