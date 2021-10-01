import { Request, Response } from "express";
import CreateProductService from "../Services/CreateProductService";
import DeleteProductService from "../Services/DeleteProductService";
import ListProductService from "../Services/ListProductService";
import ShowProductService from "../Services/ShowProductService";
import UpdateProductService from "../Services/UpdateProductService";

export default class ProductController {
  // essa classe NÃÃÃÃÃO tem regra de negócio
  // método para inserir o produto
  public async create(request: Request, response: Response): Promise<Response> {
    // recupera as informações do usuário - corpo da página
    let {name, price, quantity} = request.body
    let createProduct = new CreateProductService()
    let newProduct = await createProduct.execute({
      name,
      price,
      quantity
    })

    return response.json(newProduct);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    // recupera informação que vem da url
    let { id } = request.params;
    let deleteProduct = new DeleteProductService();
    await deleteProduct.execute({ id })

    return response.json([]) // não retorna nada
  }

  public async index(request: Request, response: Response): Promise<Response> {
    // usar request.user.id para pegar o id do cabeçalho da requisição
    console.log(`ID do usuário: ${request.user.id}`)
    
    let listProduct = new ListProductService();
    let products = await listProduct.execute()

    return response.json(products)
  }

  public async show(request: Request, response: Response): Promise<Response> {
    // id vem pela url da request
    let { id } = request.params
    let showProduct = new ShowProductService();
    let product = await showProduct.execute({ id })

    return response.json(product)
  }

  public async update(request: Request, response: Response): Promise<Response> {
    // id vem da url
    let { id } = request.params
    // os valores vem do corpo da requisição
    let { name, price, quantity } = request.body
    let updateService = new UpdateProductService();
    let product = await updateService.execute({id, name, price, quantity})

    return response.json(product)
  }
}