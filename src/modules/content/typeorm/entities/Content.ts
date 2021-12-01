import Items from '../../../items/typeorm/entities/Items';

import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
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
    items_id: string;
  
    @Column()
    video: string;

    @ManyToOne(() => Items, items => items.content)
    @JoinColumn({ name: 'items_id' })
    items: Items;

  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;     
  }
  
  export default Content;