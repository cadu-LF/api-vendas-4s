// esse arquivo altera o tipo de dado da request do express
// pq precisamos do id do usuário na request

// altera o Express
declare namespace Express {
  export interface Request { // altera a classe Request do express
    user: { // adicionar a variável user
      id: string // user terá o atributo id que será do tipo string
    }
  }
}