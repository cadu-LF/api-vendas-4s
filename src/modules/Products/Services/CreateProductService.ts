// criar uma inteface

import { getCustomRepository } from "typeorm";
import AppErrors from "../../../shared/Errors/AppErrors";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/Repositories/ProductRepository";

interface IRequest {
  name: string,
  price: number,
  quantity: number
}

// cria a classe
export default class CreateProductService {

  // método de execução da criação do produto
  public async execute({name, price, quantity}: IRequest): Promise<Product> {
    // recupera o repository do produto
    let productReposiory = getCustomRepository(ProductRepository);
    // verifica se o produto já existe
    let productExist = await productReposiory.findByName(name)

    if(productExist){
      // não podemos cadastrar
      throw new AppErrors('Já temos produto com esse nome');
      console.log('produto já cadastrado')
    } 

    // produto não existe ent criamos um novo
    let newProduct = productReposiory.create({
      name, 
      price,
      quantity
    })

    // salva o produto no BD
    await productReposiory.save(newProduct);

    return newProduct;

  }
}