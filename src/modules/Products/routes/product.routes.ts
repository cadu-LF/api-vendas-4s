import { Router } from 'express'

import ProductController from '../Controllers/ProductController'

//criação da rota do produto
let productRouter = Router()

// cria controller da rota'
let productController = new ProductController()

// rota de consulta
productRouter.get('/', productController.index)
productRouter.get('/:id', productController.show)

// rota de inserção
productRouter.post('/', productController.create)

// rota de deleção
productRouter.delete('/:id', productController.delete)

// rota de atualização
productRouter.put('/:id', productController.update)

export default productRouter