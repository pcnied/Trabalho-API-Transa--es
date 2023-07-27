import { NextFunction, Request, Response } from "express";

export function verifyCreateTransaction(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title, value, type } = req.body;

  if (!title || !value || !type) {
    return res.status(400).json({
      error: "Title, value e type são requeridos para criar uma transação.",
    });
  }

  if (!title) {
    return res.status(400).json({
      error: "Title é requerido para criar uma transação.",
    });
  }

  if (!value || typeof value !== "number") {
    return res.status(400).json({
      error: "Value é requerido para criar uma transação e deve ser um número.",
    });
  }

  if (!type || (type !== "income" && type !== "outcome")) {
    return res.status(400).json({
      error:
        "Type é requerido para criar uma transação e deve ser 'income' ou 'outcome.",
    });
  }

  next();
}
