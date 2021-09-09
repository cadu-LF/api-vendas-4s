import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1631146598290 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid', // identificador único e universal
                    isPrimary: true,
                    generationStrategy: 'uuid', // vai criar altomaticamente em uuid
                    default: 'uuid_generate_v4()' // algoritmo de geração de valores
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true // o email tem que ser único
                },
                {
                    name: 'password',
                    type: 'varchar'
                },
                {
                    name: 'avatar',
                    type: 'varchar',
                    isNullable: true,
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
        await queryRunner.dropTable('users');
    }

}
