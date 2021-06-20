// @ts-nocheck
import {
 Column, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({ name: 'boards' })
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column()
  title: string = 'title';

  @OneToMany(() => Columns, (column) => column.board, { nulable: true })
  columns: Columns[];
}
