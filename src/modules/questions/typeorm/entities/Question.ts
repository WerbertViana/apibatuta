import Alternative from '../../../alternatives/typeorm/entities/Alternative';

import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('questions')
  class Question {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
    
    @Column()
    correct_alternative: string;

    @Column()
    correct_option: string;
    
    @Column()
    levels: string;

    @Column()
    elo: string;

    @OneToMany(() => Alternative, alternative => alternative.question, {
      cascade: true,
    })
    alternatives: Alternative[];

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;     
  }
  
  export default Question;