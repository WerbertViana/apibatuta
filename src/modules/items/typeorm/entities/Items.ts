import Feed from '../../../feeds/typeorm/entities/Feed';
import Content from '../../../content/typeorm/entitites/Content';

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
  
  @Entity('items')
  class Items {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    title: string;

    @Column()
    feed_id: string;

    @Column()
    show_feed: boolean;
  
    @Column()
    icon: string;

    @ManyToOne(() => Feed, feed => feed.items)
    @JoinColumn({ name: 'feed_id' })
    feed: Feed;

    @OneToMany(() => Content, content => content.items, {
      cascade: true,
    })
    content: Content[];

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;     
  }
  
  export default Items;