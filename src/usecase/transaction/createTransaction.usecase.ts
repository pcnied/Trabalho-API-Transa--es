import Transaction, { TypeTransaction } from "../../classes/transaction";
import UserRepository from "../../repositories/user/user.repository";

export type CreateTransactionRequestDTO = {
  userId: string;
  title: string;
  value: number;
  type: TypeTransaction;
};

export type CreateTransactionResponseDTO = {
  status: string;
  transaction: Transaction;
};

class CreateTransactionUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(data: CreateTransactionRequestDTO): CreateTransactionResponseDTO {
    const { userId, title, value, type } = data;

    const transaction = new Transaction(title, value, type);
    this.userRepository.createTransaction(userId, transaction);

    return {
      status: "Transação criada e adicionada com sucesso!",
      transaction,
    };
  }
}

export default CreateTransactionUseCase;
