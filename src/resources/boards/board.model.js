const uuid = require('uuid')

class Board {
  constructor({
    id = uuid.v4(),
    title = 'Autotest board',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
