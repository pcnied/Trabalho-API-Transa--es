import { NextFunction, Request, Response } from "express";

export function verifyUpdateTransaction(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title, value, type } = req.body;

  if (!title && !value && !type) {
    return res.status(400).json({
      error:
        "É necessário ao menos uma das propriedades 'title', 'value' ou 'type' para editar!",
    });
  }

  if (type && type !== "income" && type !== "outcome") {
    return res.status(400).json({
      error:
        "Tipo de transação inválido! Type de transação deve ser 'income' ou 'outcome'.",
    });
  }

  next();
}
