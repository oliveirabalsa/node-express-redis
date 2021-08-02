import express, { Request, Response, NextFunction } from "express";
import "reflect-metadata";
import "./web/config/container";
import "express-async-errors";
import AppError from "./web/errors/AppError";

import routes from "./web/routes";

import "./infra/typeorm/config";

const app = express();
app.use(express.json());

app.use(routes);

// app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
//   console.log(err);
//   if (err instanceof AppError) {
//     return response
//       .status(err.statusCode)
//       .json({ status: "error", message: err.message });
//   }

//   return response
//     .status(500)
//     .json({ status: "error", message: "Internal server error" });
// });

app.listen(3030, () => {
  console.log("Server is running");
});
