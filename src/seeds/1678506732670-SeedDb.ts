import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1677642218080 implements MigrationInterface {
  name = 'SeedDb1677642218080';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`
      );

    await queryRunner.query(
      // pwd 123
      `INSERT INTO users (username, email, password) VALUES ('foo', 'foo@gmail.com', '$2b$10$cGONTAqhWPtbEjghcPfzEujJDv1acUqOPLlx4JtRCjH6K5euClzOa')`,);

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'First article description', 'First article body', 'coffee,dragons', 1), ('second-article', 'second article', 'second article description', 'second article body', 'coffee,dragons', 1)`
    )
  }


  public async down(queryRunner: QueryRunner): Promise<void> {}
}
