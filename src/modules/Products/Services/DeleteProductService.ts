import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/Errors/AppErrors";
import ProductRepository from "../typeorm/Repositories/ProductRepository";

interface IRequest {
  id: string // string pq é um uuid
}

export default class DeleteProductService {

  //cria o método execute
  public async execute({id}: IRequest): Promise<void> {

    // cria uma variável de um repositório customizado
    let productRepository = getCustomRepository(ProductRepository);

    // procura um produto pelo id
    let product = await productRepository.findOne(id);
    if(!product) {
      throw new AppError('Produto não existe')
    }
    await productRepository.remove(product);
  }
}