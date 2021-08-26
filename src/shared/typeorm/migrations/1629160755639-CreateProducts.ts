import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1629160755639 implements MigrationInterface {

    // executado quando for criar a table
    // retorna uma Promisse(promessa de um retorno)
    public async up(queryRunner: QueryRunner): Promise<void> {

        // criar tabela no BD
        // envia um pedido e só volta a executar depois de uma resposta
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'uuid', // identificador único
                    isPrimary: true,
                    generationStrategy: 'uuid', // vai criar altomaticamente em uuid
                    default: 'uuid_generate_v4()' // algoritmo de geração de valores
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'decimal',
                    scale: 2
                },
                {
                    name: 'quantity',
                    type: 'int'
                },
                {
                    name: 'created_at',
                    type: 'timestamp with time zone', // registra o momento em 
                    //que o registro foi criado de acordo com o horário do SO
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp with time zone',
                    // define valor default para esse campo
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // remove a tabela do BD
        // chamamos um método síncrono
        await queryRunner.dropTable('products');
    }

}
