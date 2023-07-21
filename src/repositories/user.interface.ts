import User from "../classes/user";
import { UpdateUserRequestDTO } from "../usecase/Users/updateUser.usecase";

interface IUserRepository {
  getOne(cpf: string): User | undefined;
  getById(id: string): User | undefined;
  getAll(): User[];
  getBy(key: string, value: string): User[];
  create(user: User): void;
  update(id: string, data: UpdateUserRequestDTO): void;
}

export default IUserRepository;
