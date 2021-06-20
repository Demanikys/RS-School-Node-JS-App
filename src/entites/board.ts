/* eslint-disable max-classes-per-file */
// @ts-nocheck
import {
 Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToOne,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column()
  title: string = 'title';

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  @OneToMany(() => Columns, (column) => column.board, { nulable: true })
  columns: Columns[];
}

@Entity()
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
