import { Request, Response } from "express";
import CreateUserService from "../Services/CreateUserService";
import ListUserService from "../Services/ListUserService";

export default class UserController {

  public async create(request: Request, response: Response): Promise<Response> {

    let {name, email, password} = request.body
    let createUser = new CreateUserService()
    let newUser = await createUser.execute({
      name,
      email,
      password
    })

    return response.json(newUser);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    
    let listUser = new ListUserService();
    let users = await listUser.execute()

    return response.json(users)
  }
}