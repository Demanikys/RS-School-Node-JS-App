import { v4 as uuid } from 'uuid';
import { IColumn } from '../../types';

class Board {
  id: string;

  title: string;

  columns: IColumn[];

  constructor({ id = uuid(), title = 'Autotest board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((item: IColumn) => {
      const column = item;
      column.id = uuid();
      return column;
    });
  }
}

export default Board;
