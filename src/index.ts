import express, { Request, Response } from "express";
import verify from "../src/middlewares/verify";
import { CreateUserController } from "./controllers/Users/createUser.controller";
import { DeleteUserController } from "./controllers/Users/deleteUser.controller";
import { GetAllUsersController } from "./controllers/Users/getAllUsers.controller";
import { getUserController } from "./controllers/Users/getUser.controller";
import { UpdateUserController } from "./controllers/Users/updateUser.controller";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080, () => console.log("Servidor iniciado"));

app.get("/", (request: Request, response: Response) => {
  return response.send("OK");
});

const createUserController = new CreateUserController();

app.post("/users", verify, createUserController.execute);

app.get("/users/:id", getUserController.execute);

const getAllUsersController = new GetAllUsersController();

app.get("/users", getAllUsersController.execute);

const updateUserController = new UpdateUserController();

app.put("/users/:id", updateUserController.execute);

const deleteUserController = new DeleteUserController();

app.delete("/users/:id", deleteUserController.execute);
