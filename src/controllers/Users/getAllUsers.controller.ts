import { Request, Response } from "express";
import { userRepository } from "../../repositories/user.repository";
import {
  GetAllUsersRequestDTO,
  GetAllUsersUseCase,
} from "../../usecase/Users/getAllUsers.usecase";

export class GetAllUsersController {
  public execute(req: Request, res: Response) {
    const { name, cpf, email } = req.query;

    const payload: GetAllUsersRequestDTO = {
      name: !name ? undefined : String(name),
      cpf: !cpf ? undefined : String(cpf),
      email: !email ? undefined : String(email),
    };

    const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
    const response = getAllUsersUseCase.execute(payload);

    return res.status(200).json(response);
  }
}
