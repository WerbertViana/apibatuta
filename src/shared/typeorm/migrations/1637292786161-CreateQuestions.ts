import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateQuestions1637292786161 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'questions',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'correct_alternative',
                        type: 'varchar',
                    },
                    {
                        name: 'correct_option',
                        type: 'varchar',
                    },
                    {
                        name: 'items_id',
                        type: 'uuid'
                    },
                    {
                        name: 'levels',
                        type: 'varchar',
                    },
                    {
                        name: 'elo',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    }
                ],
                foreignKeys: [
                    {
                        name: 'QuestionItem',
                        referencedTableName: 'items',
                        referencedColumnNames: ['id'],
                        columnNames: ['items_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE',
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('questions');
    }

}
