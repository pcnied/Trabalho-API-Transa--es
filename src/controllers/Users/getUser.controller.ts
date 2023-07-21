import { Request, Response } from "express";
import { userRepository } from "../../repositories/user.repository";
import { GetUserUseCase } from "../../usecase/Users/getUser.usecase";

class GetUserController {
  public execute(req: Request, res: Response) {
    const { id } = req.params;

    const getUserUseCase = new GetUserUseCase(userRepository);
    const response = getUserUseCase.execute(id);

    if (!response.user) {
      return res.status(400).json(response);
    }

    return res.status(200).json(response);
  }
}

export const getUserController = new GetUserController();
