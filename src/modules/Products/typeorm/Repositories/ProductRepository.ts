// repositório da entidade Product

import { EntityRepository, Repository } from "typeorm";
import Product from "../entities/Product";

@EntityRepository(Product)
export default class ProductRepository extends Repository<Product>{

  // exemplo de busca por nome
  // método assíncrono deve retornar uma Promisse
  public async findByName(name: string): Promise<Product | undefined> {
    
    const product = await this.findOne({
      where: { 
        name
      }
    })

    return product
  }
}