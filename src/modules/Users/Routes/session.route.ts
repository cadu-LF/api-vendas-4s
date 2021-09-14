import { Router } from 'express'

import SessionUserController from '../Controllers/SessionUserController'
import {celebrate, Joi, Segments} from 'celebrate'

let sessionUserRouter = Router()
let sessionUserController = new SessionUserController()

sessionUserRouter.post('/',
celebrate({
  [Segments.BODY]: {
    email: Joi.string().required(),
    password: Joi.string().required()
  }
}),
sessionUserController.create)

export default sessionUserRouter