import { EntityRepository, Repository } from "typeorm";
import User from "../Entities/User";

@EntityRepository(User)
export default class UserRepository extends Repository<User>{

  // exemplo de busca por nome
  // método assíncrono deve retornar uma Promisse
  public async findByName(name: string): Promise<User | undefined> {
    
    const user = await this.findOne({
      where: { 
        name
      }
    });

    return user;
  }

  /**
   * Faz uma busca por email
   * @param strnig:email 
   * @returns Promise<User | undefined>
   */
  public async findByEmail(email: string): Promise<User | undefined> {
    
    const user = await this.findOne({
      where: { 
        email
      }
    });

    return user;
  }

  /**
   * Faz uma busca pelo id do usuário
   * @param string id
   * @returns Promise<User | undefined>
   */
  public async findById(id: string): Promise<User | undefined> {
    
    const user = await this.findOne({
      where: { 
        id
      }
    });

    return user;
  }
}