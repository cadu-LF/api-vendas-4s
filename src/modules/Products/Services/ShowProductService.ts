import { getCustomRepository } from "typeorm"
import AppError from "../../../shared/Errors/AppErrors"
import Product from "../typeorm/entities/Product"
import ProductRepository from "../typeorm/Repositories/ProductRepository"

interface IRequest {
  id: string
}

// retorna apenas um produto
export default class ShowProductService {
  
  public async execute({id}: IRequest): Promise<Product> {

    let productRepository = getCustomRepository(ProductRepository)
    let product = await productRepository.findOne(id)

    if(!product) {
      throw new AppError('Produto não existe')
    }
    
    return product
  }
}