// criar uma inteface

import { getCustomRepository } from "typeorm";
import AppErrors from "../../../shared/Errors/AppErrors";
import User from "../typeorm/Entities/User";
import UserRepository from "../typeorm/Repositories/UserRepository";
import {hash} from 'bcryptjs'

interface IRequest {
  name: string,
  email: string,
  password: string,
}

export default class CreateUserService {

  // método de execução da criação do produto
  public async execute({name, email, password}: IRequest): Promise<User> {
    // recupera o repository do produto
    let userReposiory = getCustomRepository(UserRepository);
    // verifica se o produto já existe
    let emailExist = await userReposiory.findByEmail(email)

    if(emailExist){
      // não podemos cadastrar
      throw new AppErrors('Já temos usuário com esse email');
    } 

    // criar uma senha criptografada com 8 caracteres
    let hashedPassword = await hash(password, 8);
    // produto não existe ent criamos um novo
    let newUser = userReposiory.create({
      name, 
      email,
      password: hashedPassword
    })

    // salva o produto no BD
    await userReposiory.save(newUser);

    return newUser;

  }
}