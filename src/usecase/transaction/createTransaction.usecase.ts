import Transaction, { TypeTransaction } from "../../classes/transaction";
import UserRepository from "../../repositories/user/user.repository";

export type CreateAnotationRequestDTO = {
  userId: string;
  title: string;
  value: number;
  type: TypeTransaction;
};

export type CreateAnotationResponseDTO = {
  status: string;
  transaction: Transaction;
};

class CreateTransactionUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(data: CreateAnotationRequestDTO): CreateAnotationResponseDTO {
    const { userId, title, value, type } = data;

    const transaction = new Transaction(title, value, type);
    this.userRepository.createTransaction(userId, transaction);

    return {
      status: "Anotação criada e adicionada com sucesso!",
      transaction,
    };
  }
}

export default CreateTransactionUseCase;
