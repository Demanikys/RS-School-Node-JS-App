import { v4 as uuid } from 'uuid';
class Task {
    constructor({ id = uuid(), title = 'Autotest task', order = 0, description = 'Lorem ipsum', userId = null, // assignee
    boardId = null, columnId = null, } = {}) {
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
