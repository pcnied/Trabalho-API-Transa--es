import Transaction, { TypeTransaction } from "../../classes/transaction";
import User from "../../classes/user";
import { users } from "../../database";
import { GetAllTransactionsRequestParamsDTO } from "../../usecase/transaction/getAllTransactions.usecase";
import BaseRepository from "../baseRepository";

class UserRepository extends BaseRepository<User> {
  constructor() {
    super(users);
  }

  getAllTransactions(
    userId: string,
    filter: GetAllTransactionsRequestParamsDTO
  ): Transaction[] {
    const { title, type } = filter;

    const index = this.repository.findIndex((user) => user.id === userId);
    let transactions = [...this.repository[index].transactions];

    if (title) {
      transactions = transactions.filter((t) =>
        t.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (type) {
      transactions = transactions.filter((t) => t.type === type);
    }

    return transactions;
  }

  getTransaction(id: string, transactionId: string): Transaction | undefined {
    const index = this.repository.findIndex((user) => user.id === id);
    const indexTransaction = this.repository[index].transactions.findIndex(
      (t) => {
        return t.id === transactionId;
      }
    );

    if (indexTransaction === -1) {
      return undefined;
    }

    return this.repository[index].transactions[indexTransaction];
  }

  createTransaction(id: string, transaction: Transaction): User {
    const index = this.repository.findIndex((user) => user.id === id);
    this.repository[index].transactions.push(transaction);

    return this.repository[index];
  }

  deleteTransaction(id: string, transactionId: string): User | undefined {
    const index = this.repository.findIndex((user) => user.id === id);
    const indexTransaction = this.repository[index].transactions.findIndex(
      (t) => {
        return t.id === transactionId;
      }
    );

    if (indexTransaction === -1) {
      return undefined;
    }

    this.repository[index].transactions.splice(indexTransaction, 1);
    return this.repository[index];
  }

  updateTransaction(
    id: string,
    transactionId: string,
    item: { title: string; value: number; type: TypeTransaction }
  ): Transaction {
    const index = this.repository.findIndex((user) => user.id === id);
    const indexTransaction = this.repository[index].transactions.findIndex(
      (t) => {
        return t.id === transactionId;
      }
    );

    this.repository[index].transactions[indexTransaction].title = item.title;
    this.repository[index].transactions[indexTransaction].value = item.value;
    this.repository[index].transactions[indexTransaction].type = item.type;

    return this.repository[index].transactions[indexTransaction];
  }
}

export default UserRepository;
