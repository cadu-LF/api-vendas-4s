// importar a dependência do Express
import express from 'express'

import routes from './routes/routes'
//importar e executa conexão com o BD
import '../typeorm'

// cria um server express
let servidor = express();

// associa a rota ao servidor
servidor.use(routes)

// sobe o servidor que fica escutando as requisições
servidor.listen(3333, () => {
  console.log("Server online")
})