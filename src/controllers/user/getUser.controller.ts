import { Request, Response } from "express";
import { userRepository } from "../..";
import { GetUserUseCase } from "../../usecase/user/getUser.usecase";

export class GetUserController {
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
