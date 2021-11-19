import Items from '../../../items/typeorm/entities/Items';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
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
    show_lesson: boolean;

    @Column("boolean")
    show_feed: boolean;

    @Column("boolean")
    progress: boolean;

    @OneToMany(() => Items, item => item.feed, {
      cascade: true,
    })
    items: Items[];

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;     
  }
  
  export default Feed;