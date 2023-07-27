import User from "../../classes/user";
import UserRepository from "../../repositories/user/user.repository";

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
    const { name, email, age, cpf } = data;

    const userFound = this.userRepository.getOne("_cpf", cpf);

    if (userFound) {
      throw new Error("CPF já utilizado! Tente novamente.");
    }

    const user = new User(name, age, cpf, email);
    this.userRepository.create(user);

    const response: CreateUserResponseDTO = {
      status: "Usuário criado com sucesso!",
      user: user,
    };

    return response;
  }
}
