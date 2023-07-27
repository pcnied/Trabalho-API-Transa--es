import { Request, Response } from "express";
import { userRepository } from "../..";
import CreateTransactionUseCase from "../../usecase/transaction/createTransaction.usecase";

export class CreateTransactionController {
  public execute(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const { title, value, type } = req.body;

      const createTransactionUseCase = new CreateTransactionUseCase(
        userRepository
      );

      const response = createTransactionUseCase.execute({
        userId,
        title,
        value,
        type,
      });

      return res.status(201).json(response);
    } catch (error: any) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}
