import { UserRepository } from "../../repositories/user.repository";
import { UserResponse } from "./getUser.usecase";

interface UpdateUserResponseDTO {
  user: UserResponse;
  status: string;
}

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  public execute(id: string): UpdateUserResponseDTO {
    const user = this.userRepository.getById(id);

    if (!user) {
      throw new Error("Usuário não encontrado pelo ID informado.");
    }

    this.userRepository.delete(id);

    return {
      user,
      status: "Usuário deletado com sucesso!",
    };
  }
}
