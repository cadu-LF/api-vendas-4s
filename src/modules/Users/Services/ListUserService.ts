import { getCustomRepository } from "typeorm";
import User from "../typeorm/Entities/User";
import UserRepository from "../typeorm/Repositories/UserRepository";

// lista todos os usuários
export default class ListUserService {
  
  public async execute(): Promise<User[]> {

    let userRepository = getCustomRepository(UserRepository)
    let users = await userRepository.find()
    return users
  }
}