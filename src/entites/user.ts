// @ts-nocheck
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  password: string;

  // constructor({
  //   id = uuid(),
  //   name = 'USER',
  //   login = 'user',
  //   password = 'P@55w0rd',
  // } = {}) {
  //   this.id = id;
  //   this.name = name;
  //   this.login = login;
  //   this.password = password;
  // }

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
