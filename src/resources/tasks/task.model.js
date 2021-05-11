const uuid = require('uuid')

class Task {
  constructor({
    id = uuid.v4(),
    title = 'Autotest task',
    order = 0,
    description = 'Lorem ipsum',
    userId, // assignee
    boardId,
    columnId
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order
    this.description = description
    this.userId = userId // assignee
    this.boardId = boardId
    this.columnId = columnId
  }
}

module.exports = Task;
