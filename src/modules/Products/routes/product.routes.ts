import { Router } from 'express'

import ProductController from '../Controllers/ProductController'
import {celebrate, Joi, Segments} from 'celebrate'
import isAuthenticated from '../../../shared/middleware/isAuthenticated'

//criação da rota do produto
let productRouter = Router()
// cria controller da rota'
let productController = new ProductController()
// rota de consulta
// não tem o que tratar
productRouter.get('/',isAuthenticated, productController.index) 
// tratar a obrigatoriedade de ter um id
productRouter.get('/:id',
celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required()
  }
}),
productController.show)
// rota de inserção
// tratar o erro de exigir o corpo da requisição
productRouter.post('/',
celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    price: Joi.number().precision(2).required(),
    quantity: Joi.number().required()
  }
}),
productController.create)
// rota de deleção
productRouter.delete('/:id',
celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  }
}),
productController.delete)
// rota de atualização
productRouter.put('/:id',
celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
  [Segments.BODY]: {
    name: Joi.string().required(),
    price: Joi.number().precision(2).required(),
    quantity: Joi.number().required()
  }
}),
productController.update)

export default productRouter