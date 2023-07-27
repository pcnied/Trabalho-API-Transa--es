import { Request, Response } from "express";
import { userRepository } from "../..";
import {
  UpdateUserRequestDTO,
  UpdateUserUseCase,
} from "../../usecase/user/updateUser.usecase";

export class UpdateUserController {
  public execute(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: UpdateUserRequestDTO = req.body;

      const updateUserUseCase = new UpdateUserUseCase(userRepository);
      const response = updateUserUseCase.execute(id, data);

      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}
