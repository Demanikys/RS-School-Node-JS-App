import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column('varchar', { length: 25 })
  name: string = 'USER';

  @Column('varchar', { length: 25 })
  login: string = 'user';

  @Column('varchar', { length: 25 })
  pasword: string = 'P@55w0rd';
}
