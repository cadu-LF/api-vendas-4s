import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/Repositories/ProductRepository";

// lista todos os produtos
export default class ListProductService {
  
  public async execute(): Promise<Product[]> {

    let productRepository = getCustomRepository(ProductRepository)
    let products = await productRepository.find()
    return products
  }
}