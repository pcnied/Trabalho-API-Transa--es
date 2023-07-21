import { UserRepository } from "../../repositories/user.repository";

export type UserResponse = {
  id: string;
  name: string;
  age: number;
  cpf: string;
  email: string;
};

type GetUserResponseDTO = {
  status: string;
  user?: UserResponse;
};

export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  public execute(id: string): GetUserResponseDTO {
    const userFound = this.userRepository.getByID(id);

    if (!userFound) {
      const response: GetUserResponseDTO = {
        status: "Usuário não encontrado.",
      };

      return response;
    }

    const response: GetUserResponseDTO = {
      status: "Usuário encontrado com sucesso.",
      user: {
        id: userFound.id,
        name: userFound.name,
        age: userFound.age,
        cpf: userFound.cpf,
        email: userFound.email,
      },
    };

    return response;
  }
}
