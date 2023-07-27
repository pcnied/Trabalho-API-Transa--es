import { Request, Response } from "express";
import { userRepository } from "../..";
import UpdateTransactionUseCase, {
  UpdateTransactionRequestDTO,
} from "../../usecase/transaction/updateTransaction.usecase";

export class UpdateTransactionController {
  execute(req: Request, res: Response) {
    try {
      const { userId, id } = req.params;
      const data: UpdateTransactionRequestDTO = req.body;

      const updateTransactionUseCase = new UpdateTransactionUseCase(
        userRepository
      );
      const response = updateTransactionUseCase.execute(userId, id, data);

      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}
