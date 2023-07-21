import { Request, Response } from "express";
import { CreateUserUseCase } from "../../usecase/Users/createUser.usecase";

export class CreateUserController {
  public execute(req: Request, res: Response) {
    const { name, age, cpf, email } = req.body;

    const createUserUseCase = new CreateUserUseCase();
    const response = createUserUseCase.execute({
      name,
      age,
      cpf,
      email,
    });

    if (!response.user) {
      res.status(400).json(response);
    }

    return res.status(201).json(response);
  }
}
