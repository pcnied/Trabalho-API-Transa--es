import { NextFunction, Request, Response } from "express";
import { userRepository } from "..";

export function verifyUpdateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const { name, email, age, cpf } = req.body;

  const user = userRepository.getById(id);

  if (!user) {
    return res.status(400).json({
      status: "Usuário não encontrado pelo ID informado.",
    });
  }

  if (!name && !email && !age && !cpf) {
    return res.status(400).json({
      status: "Edite pelo menos algum dos campos: name, email, age ou cpf!",
    });
  }

  if (cpf) {
    const cleanCPF = cpf.replaceAll(".", "").replace("-", "");

    if (cleanCPF.length !== 11) {
      return res.status(400).json({
        status: "CPF inválido. Tente novamente!",
      });
    }
  }

  next();
}
