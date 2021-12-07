import Alternative from '../../../alternatives/typeorm/entities/Alternative';

import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
import Items from '../../../items/typeorm/entities/Items';
  
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

    @Column()
    items_id: string;

    @ManyToOne(() => Items, items => items.question)
    @JoinColumn({ name: 'items_id' })
    items: Items;

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