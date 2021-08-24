import { Request, Response } from "express";
import CreateProductService from "../Services/CreateProductService";
import DeleteProductService from "../Services/DeleteProductService";
import ListProductService from "../Services/ListProductService";
import ShowProductService from "../Services/ShowProductService";

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
}