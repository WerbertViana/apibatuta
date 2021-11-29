import Feed from '../../../feeds/typeorm/entities/Feed';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
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

    @Column("int4")
    content: number;

    @ManyToOne(() => Feed, feed => feed.items)
    @JoinColumn({ name: 'feed_id' })
    feed: Feed;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;     
  }
  
  export default Items;