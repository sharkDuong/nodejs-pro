import express, { Express } from "express";
import {
  getCreateUserPage,
  getHomePage,
  postCreateUserPage,
  postDeleteUserPage,
  getViewUser,
  postUpdateUserPage,
} from "controllers/user.controller";

const router = express.Router();

const wedRouters = (app: Express) => {
  router.get("/", getHomePage);

  router.get("/create-user", getCreateUserPage);
  router.post("/handle-create-user", postCreateUserPage);
  router.post("/handle-delete-user/:id", postDeleteUserPage);
  router.get("/handle-view-user/:id", getViewUser);
  router.post("/handle-update-user", postUpdateUserPage);

  app.use("/", router);
};

export default wedRouters;
