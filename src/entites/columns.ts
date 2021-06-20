// @ts-nocheck
import {
  Column, Entity, PrimaryGeneratedColumn,
 } from 'typeorm';

@Entity({ name: 'columns' })
export class Columns {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column()
  title: string;

  @Column()
  order: number;

  @ManyToOne(() => Board, (board) => board.columns, { onDelete: 'CASCADE' })
  board: Board;
}
