import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('content')
  class Content {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    image: string;

    @Column()
    name: string;
  
    @Column()
    music: string;
  
    @Column()
    video: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;     
  }
  
  export default Content;