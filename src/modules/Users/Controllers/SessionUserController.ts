import { Request, Response } from "express";
import SessionUserService from "../Services/SessionUserService";

export default class SessionUserController {

  public async create(request: Request, response: Response): Promise<Response> {

    let {email, password} = request.body
    // gera token de autenticação para o usuário
    let createSession = new SessionUserService()
    let user = await createSession.execute({
      email,
      password
    })

    return response.json(user);
  }
}