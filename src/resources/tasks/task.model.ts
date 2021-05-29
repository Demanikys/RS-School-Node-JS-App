import uuid from 'uuid';

class Task {
  id: string;
  title?: string;
  order?: number;
  description?: string;
  userId: string | null;
  boardId: string | null;
  columnId?: string | null;

  constructor({
    id = uuid.v4(),
    title = 'Autotest task',
    order = 0,
    description = 'Lorem ipsum',
    userId = null, // assignee
    boardId = null,
    columnId = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId; // assignee
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

export default Task;
