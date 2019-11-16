import http from "http";
import express from "express";
import intercept from "./intercept";
import { applyIntercept, applyRoutes } from "./utils";
import errorHandlers from "./intercept/errorHandlers";
import routes from "./services";
import path from "path"

process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
  });
  process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
  });

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
applyIntercept(intercept, app);
applyRoutes(routes, app);
applyIntercept(errorHandlers, app);
const { PORT = 3000 } = process.env;
const server = http.createServer(app);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);