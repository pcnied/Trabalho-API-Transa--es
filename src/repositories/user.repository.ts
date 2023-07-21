import User from "../classes/user";
import { users } from "../database";
import { UpdateUserRequestDTO } from "../usecase/Users/updateUser.usecase";
import IUserRepository from "./user.interface";

export class UserRepository implements IUserRepository {
  getById(id: string): User | undefined {
    throw new Error("Method not implemented.");
  }
  public getOne(cpf: string): User | undefined {
    const userFound = users.find((user) => {
      return user.cpf === cpf;
    });

    return userFound;
  }

  public create(user: User) {
    users.push(user);
  }

  public getByID(id: string): User | undefined {
    const userFound = users.find((user) => {
      return user.id === id;
    });

    return userFound;
  }

  public getAll(): User[] {
    return users;
  }

  public getBy(key: string, value: string): User[] {
    const usersFiltered = users.filter((user) => {
      return user[key as keyof User] == value;
    });

    return usersFiltered;
  }

  public update(id: string, data: UpdateUserRequestDTO) {
    const indexUser = users.findIndex((user) => {
      return user.id == id;
    });

    if (indexUser === -1) {
      throw new Error("Usuário não encontrado pelo ID informado");
    }

    users[indexUser].name = data.name || users[indexUser].name;
    users[indexUser].age = data.age || users[indexUser].age;
    users[indexUser].cpf = data.cpf || users[indexUser].cpf;
    users[indexUser].email = data.email || users[indexUser].email;
  }

  delete(id: string) {
    const indexUser = users.findIndex((user) => {
      return user.id == id;
    });

    users.splice(indexUser, 1);
  }
}

export const userRepository = new UserRepository();
