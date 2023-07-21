import User from "../../classes/user";
import { UserRepository } from "../../repositories/user.repository";

type CreateUserRequestDTO = {
  name: string;
  age: number;
  cpf: string;
  email: string;
};

type CreateUserResponseDTO = {
  status: string;
  user?: User;
};

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  public execute(data: CreateUserRequestDTO): CreateUserResponseDTO {
    const userFound = this.userRepository.getOne(data.cpf);

    if (userFound) {
      const response = {
        status: "Usuário já cadastrado.",
      };

      return response;
    }

    const user = new User(data.name, data.age, data.cpf, data.email);

    this.userRepository.create(user);

    const response: CreateUserResponseDTO = {
      status: "Usuário criado com sucesso",
      user: user,
    };

    return response;
  }
}
