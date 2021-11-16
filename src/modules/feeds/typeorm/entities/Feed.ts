import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('feeds')
  class Feed {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("int4")
    lesson: number;

    @Column("boolean")
    progress: boolean;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;     
  }
  
  export default Feed;