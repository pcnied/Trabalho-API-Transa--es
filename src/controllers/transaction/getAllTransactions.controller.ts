import { Request, Response } from "express";
import { userRepository } from "../..";
import GetAllTransactionsUseCase, {
  GetAllTransactionsRequestParamsDTO,
} from "../../usecase/transaction/getAllTransactions.usecase";

export class GetAllTransactionsController {
  execute(req: Request, res: Response) {
    const { userId } = req.params;
    const data: GetAllTransactionsRequestParamsDTO = req.query;

    const getAllTransactionsUseCase = new GetAllTransactionsUseCase(
      userRepository
    );
    const response = getAllTransactionsUseCase.execute(userId, data);

    return res.status(200).json(response);
  }
}
