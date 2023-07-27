import Transaction, { TypeTransaction } from "../../classes/transaction";
import UserRepository from "../../repositories/user/user.repository";

export type UpdateTransactionRequestDTO = {
  title: string;
  value: number;
  type: TypeTransaction;
};

export type UpdateTransactionResponseDTO = {
  status: string;
  transaction: Transaction;
};

class UpdateTransactionUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(
    userId: string,
    id: string,
    data: UpdateTransactionRequestDTO
  ): UpdateTransactionResponseDTO {
    const { title, value, type } = data;

    const transaction = this.userRepository.getTransaction(userId, id);

    if (!transaction) {
      throw new Error("Transação não encontrada para este usuário!");
    }

    const transactionUpdated = this.userRepository.updateTransaction(
      userId,
      id,
      {
        title: title || transaction.title,
        value: value || transaction.value,
        type: type || transaction.type,
      }
    );

    return {
      status: "Transação atualizada com sucesso!",
      transaction: transactionUpdated,
    };
  }
}

export default UpdateTransactionUseCase;
