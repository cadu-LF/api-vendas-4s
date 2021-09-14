// vamos usar o padrão de projeto decorator

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// fala que representa a tabela products
@Entity('users')
export default class User {

  // fala que é um pk com valor gerado
  @PrimaryGeneratedColumn('uuid')
  id: string; // id é um uuid -> universally unique identifier

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  // fala que é uma coluna responsável por armazenar a data de criação
  @CreateDateColumn()
  created_at: Date;

  // fala que é uma coluna responsável por armazenar a data de atualização
  @UpdateDateColumn()
  updated_at: Date;
}