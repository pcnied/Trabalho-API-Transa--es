import { NextFunction, Request, Response } from "express";


function verify(request: Request, response: Response, next: NextFunction) {
      const { name, age, cpf, email} = request.body;

    if (!name || !age || !cpf || !email) {
        return response.status(400).json({
            status: "Dados inválidos. Preencha todos os campos."
        })
    }

    const cleanCPF = cpf.replaceAll('.', '').replace('-', '');

    if(cleanCPF.length !== 11) {
        return response.status(400).json({
            status: 'CPF inválido. Tente novamente.'
        })
    }

    next();
}

export default verify;