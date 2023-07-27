import User from "../../classes/user";
import UserRepository from "../../repositories/user/user.repository";

type DeleteTransactionRequestDTO = {
  userId: string;
  id: string;
};

type DeleteTransactionResponseDTO = {
  status: string;
  userUpdated: User;
};

class DeleteTransactionUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(data: DeleteTransactionRequestDTO): DeleteTransactionResponseDTO {
    const { userId, id } = data;

    const userUpdated = this.userRepository.deleteTransaction(userId, id);

    if (!userUpdated) {
      throw new Error("Transação não encontrada para este usuário!");
    }

    return {
      status: "Transação deletada com sucesso!",
      userUpdated,
    };
  }
}

export default DeleteTransactionUseCase;
