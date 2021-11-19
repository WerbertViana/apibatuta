import Question from '../../../questions/typeorm/entities/Question';

import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('alternatives')
  class Alternative {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    image: string;
    
    @Column()
    option: string;
    
    @Column()
    question_id: string;

    @ManyToOne(() => Question, question => question.alternatives)
    @JoinColumn({ name: 'question_id' })
    question: Question;
    
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;     
  }
  
  export default Alternative;