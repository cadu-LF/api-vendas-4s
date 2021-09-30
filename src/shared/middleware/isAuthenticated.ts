import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import AppError from "../Errors/AppErrors"
import authConfig from "../../config/auth"

// interface que é um tipo de dado contendo os campos do token
interface ITokenPayload {
    iat: number,
    exp: number,
    sub: string
}

export default function isAuthenticated(
  request: Request, 
  response: Response, 
  next: NextFunction
  ): void {

    //obter a autorização que está dentro do header da request
    let authHeaders = request.headers.authorization

    if (!authHeaders) {
      throw new AppError(`JWT Token is missing`)
    }

    // nome da variável com token => Beared
    // Beared vwebewnrbwerb(token)
    // vetor[0] = Beared e vetor[1] = token
    // token terá 'vwebewnrbwerb'
    let [, token] = authHeaders.split(' ')

    //verifica se o token é valido

    // tratamento de erro
    try { // tenta verificar se o token é valido
      /**
       * O token decodificado gerado tem a estrutura:
       *    iat: momento em timestamp que o token começa a funcionar
       *    exp: momento em timestamp que o token para de funcionar
       *    sub: armazena as informações do id do usuário, que vamos pegar na request
       */
      let decodedToken = verify(token, authConfig.jwt.secret)

      const {sub} =  decodedToken as ITokenPayload // pega apenas o sub do decodedToken

      // vamos alterar as informações da request, 
      // pq a requisição deve conter o id do usuário que está no sub
      return next() //deixa a API ser consumida
    }
    catch { // lança erro se o token não for válido
      throw new AppError(`Invalid JWT token`)
    }
}