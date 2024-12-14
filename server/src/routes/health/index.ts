import express from "express";
import httpStatus from "http-status";

export const createHealthRouter = () => {
  const healthRouter = express.Router();

  healthRouter.get("/health", (_, res) => res.status(httpStatus.OK).send("ok"));

  return healthRouter;
};
