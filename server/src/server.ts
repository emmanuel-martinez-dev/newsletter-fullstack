import express, { Express, Response, Request } from "express";
import { createHealthRouter } from "./routes/health";

const errorHandler = (error: Error, req: Request, res: Response) => {
  console.log(error);

  res.status(500).json({
    status: false,
    message: error.message || "Internal Server Error",
  });
};

// the server singleton
let server: Express | null = null;

export const createServer = (): Express => {
  if (server) return server;

  server = express();

  // middleware setup
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.use("/v1", createHealthRouter());

  server.use((req, res, next) => {
    next(new Error("Not found"));
  });

  server.use(errorHandler);

  return server;
};
