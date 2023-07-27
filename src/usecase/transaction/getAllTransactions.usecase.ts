import Transaction, { TypeTransaction } from "../../classes/transaction";
import UserRepository from "../../repositories/user/user.repository";

export type GetAllTransactionsRequestParamsDTO = {
  title?: string;
  type?: TypeTransaction;
};

export type GetAllTransactionsResponseDTO = {
  status: string;
  transactions: Transaction[];
  balance: {
    income: number;
    outcome: number;
    total: number;
  };
};

class GetAllTransactionsUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(userId: string, data: GetAllTransactionsRequestParamsDTO) {
    const transactions = this.userRepository.getAllTransactions(userId, data);

    return {
      status:
        transactions.length > 0
          ? "Transações encontradas com sucesso!"
          : "Nenhuma transação cadastrada ainda!",
      transactions,
      balance: {
        income: transactions
          .filter((transaction) => transaction.type === "income")
          .reduce((acc, transaction) => acc + transaction.value, 0),
        outcome: transactions
          .filter((transaction) => transaction.type === "outcome")
          .reduce((acc, transaction) => acc + transaction.value, 0),
        total: transactions.reduce(
          (acc, transaction) => acc + transaction.value,
          0
        ),
      },
    };
  }
}

export default GetAllTransactionsUseCase;
