const uuid = require('uuid');

class Board {
  constructor({ id = uuid.v4(), title = 'Autotest board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((item) => {
      const column = item;
      column.id = uuid.v4();
      return column;
    });
  }
}

module.exports = Board;
