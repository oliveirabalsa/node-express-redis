import express from "express";
import "reflect-metadata";
import './web/config/container'

import routes from "./web/routes";

import "./infra/typeorm/config";

const app = express();
app.use(express.json());

app.use(routes);
app.listen(3030, () => {
  console.log("Server is running");
});
