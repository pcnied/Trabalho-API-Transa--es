import { UserRepository } from "../../repositories/user.repository";
import { UserResponse } from "./getUser.usecase";

export type UpdateUserRequestDTO = {
  name?: string;
  age?: number;
  cpf?: string;
  email?: string;
};

interface UpdateUserResponseDTO {
  user: UserResponse;
  status: string;
}

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  public execute(
    id: string,
    data: UpdateUserRequestDTO
  ): UpdateUserResponseDTO {
    const user = this.userRepository.getById(id);

    if (!user) {
      throw new Error("Usuário não encontrado pelo ID informado");
    }

    this.userRepository.update(id, data);

    return {
      user: user,
      status: "Usuário atualizado com sucesso!",
    };
  }
}
