import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/Errors/AppErrors";
import User from "../typeorm/Entities/User";
import UserRepository from "../typeorm/Repositories/UserRepository";
import {sign} from 'jsonwebtoken'
import authConfig from '../../../config/auth'

// interface para entrada de dados
interface IRequest {
  email: string,
  password: string,
}

// interface para retorno de dados
interface IResponse {
  user: User,
  token: string,
}

// é uma sessão para o usuário
class SessionUserService {
  public async execute({email, password}: IRequest): Promise<IResponse> {
    let userRespository = getCustomRepository(UserRepository)

    let user = await userRespository.findByEmail(email)

    if (!user) {
      throw new AppError(`Incorrect email/password combination`, 401)
    }
    
    //compara a senha informada com a senha do BD(senha está criptografada)
    let passwordConfirmed = await compare(password, user.password)
    
    if (!passwordConfirmed) {
      throw new AppError(`Incorrect email/password combination`, 401)
    }

    // utilizando o JWT(jsonwebtoken) que é um token de autenticação
    // formato do Json: 
    // 1. Header
    // 2. Corpo
    // 3. Assinatura

    //sign ({}, 'chave de criptografia', {retorno})
    let token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn
    })

    return {
      user,
      token
    }
  }
}

export default SessionUserService
