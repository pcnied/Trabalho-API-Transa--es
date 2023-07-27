import Transaction from "../../classes/transaction";
import UserRepository from "../../repositories/user/user.repository";

type GetTransactionRequestDTO = {
  userId: string;
  id: string;
};

type GetTransactionResponseDTO = {
  status: string;
  transaction: Transaction;
};

class GetTransactionUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(data: GetTransactionRequestDTO): GetTransactionResponseDTO {
    const { userId, id } = data;

    const transaction = this.userRepository.getTransaction(userId, id);

    if (!transaction) {
      throw new Error("Transação não encontrada para este usuário!");
    }

    return {
      status: "Transação encontrada com sucesso!",
      transaction,
    };
  }
}

export default GetTransactionUseCase;
