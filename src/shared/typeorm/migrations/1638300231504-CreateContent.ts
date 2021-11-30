import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateContent1638300231504 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'content',
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
                        name: 'image',
                        type: 'varchar',
                    },
                    {
                        name: 'music',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'video',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'items_id',
                        type: 'uuid',
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
                    },
                ],
                foreignKeys: [
                    {
                        name: 'ContentItem',
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
        await queryRunner.dropTable('content');
    }

}
