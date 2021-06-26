var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* eslint-disable max-classes-per-file */
// @ts-nocheck
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToOne, } from 'typeorm';
import { v4 as uuid } from 'uuid';
let Board = class Board {
    constructor() {
        this.id = uuid();
        this.title = 'title';
    }
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Board.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Board.prototype, "title", void 0);
__decorate([
    OneToMany(() => Columns, (column) => column.board, { nulable: true }),
    __metadata("design:type", Array)
], Board.prototype, "columns", void 0);
Board = __decorate([
    Entity()
], Board);
export { Board };
let Columns = class Columns {
    constructor() {
        this.id = uuid();
    }
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Columns.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Columns.prototype, "title", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Columns.prototype, "order", void 0);
__decorate([
    ManyToOne(() => Board, (board) => board.columns, { onDelete: 'CASCADE' }),
    __metadata("design:type", Board)
], Columns.prototype, "board", void 0);
Columns = __decorate([
    Entity()
], Columns);
export { Columns };
