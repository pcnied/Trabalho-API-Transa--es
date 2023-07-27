import { Request, Response } from "express";
import { userRepository } from "../..";
import { CreateUserUseCase } from "../../usecase/user/createUser.usecase";

export class CreateUserController {
  public execute(req: Request, res: Response) {
    try {
      const { name, cpf, email, age } = req.body;

      const createUserUseCase = new CreateUserUseCase(userRepository);
      const response = createUserUseCase.execute({
        name,
        cpf,
        email,
        age,
      });

      return res.status(201).json(response);
    } catch (error: any) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}
