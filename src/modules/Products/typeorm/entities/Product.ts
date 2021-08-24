// vamos usar o padrão de projeto decorator

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// fala que representa a tabela products
@Entity('products')
export default class Product {

  // fala que é um pk com valor gerado
  @PrimaryGeneratedColumn('uuid')
  id: string; // id é um uuid -> universally unique identifier

  @Column()
  name: string;

  // fala que é uma coluna do tipo decimal
  @Column('decimal')
  price: number;

  // fala que é uma coluna do tipo int
  @Column('int')
  quantity: number;

  // fala que é uma coluna responsável por armazenar a data de criação
  @CreateDateColumn('created')
  created_at: Date;

  // fala que é uma coluna responsável por armazenar a data de atualização
  @UpdateDateColumn('updated')
  updated_at: Date;

}