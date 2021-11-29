import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('users')
  class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    nome: string;
  
    @Column()
    email: string;
  
    @Column()
    senha: string;

    @Column("int4")
    vida: number;

    @Column("int4")
    xp: number;

    @Column("int4")
    batutas: number;

    @Column()
    elo: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;     
  }
  
  export default User;