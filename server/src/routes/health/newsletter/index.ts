import express from "express";
import { signupHandler } from "./signup";

export const createNewsletterRouter = () => {
  const newsletterRouter = express.Router();
  newsletterRouter.post("/newsletter/signup", signupHandler());
  return newsletterRouter;
};
