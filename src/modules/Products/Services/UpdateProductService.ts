import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/Errors/AppErrors";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/Repositories/ProductRepository";

interface IRequest{
  id: string,
  name: string,
  price: number,
  quantity: number
}

export default class UpdateProductService{
  public async execute({id, name, price, quantity}: IRequest): Promise<Product>{
    let productRepository = getCustomRepository(ProductRepository)

    let productExists = await productRepository.findOne(id)

    if(!productExists){
      // lança uma excecao
      throw new AppError('Produto não existe')
    }

    let productSameName = await productRepository.findByName(name);
    if(productSameName){
      throw new AppError('Produto já tem um nome deste')
    }

    // dar o update
    productExists.name = name
    productExists.price = price
    productExists.quantity = quantity
    await productRepository.save(productExists); // como o productExiste tem id, ele atualiza
    return productExists;
  }
}