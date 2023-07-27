import { Request, Response } from "express";
import { userRepository } from "../..";
import DeleteTransactionUseCase from "../../usecase/transaction/deleteTransaction.usecase";

export class DeleteTransactionController {
  execute(req: Request, res: Response) {
    try {
      const { userId, id } = req.params;

      const deleteTransactionUseCase = new DeleteTransactionUseCase(
        userRepository
      );
      const response = deleteTransactionUseCase.execute({
        userId,
        id,
      });

      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}
