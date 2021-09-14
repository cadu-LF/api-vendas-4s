// importa Router de express
import {Router} from 'express'
import userRouter from '../../../modules/Users/Routes/user.routes'
import productRouter from '../../../modules/Products/routes/product.routes'
import sessionUserRouter from '../../../modules/Users/Routes/session.route'

// criar um objeto da classe Router
let routes = Router()

routes.use('/products', productRouter)
routes.use('/users', userRouter)
routes.use('/session', sessionUserRouter)
// criar uma rota get padrão
routes.get('/', (request, response) => {
  // retona uma mensagem no formato JSON
  return(response.json({
    nome: "Cadu",
    idade: 19,
    altura: 1.75,
    mensagem: "Deu certo"
  }))
})

export default routes