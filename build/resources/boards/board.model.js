import { v4 as uuid } from 'uuid';
class Board {
    constructor({ id = uuid(), title = 'Autotest board', columns = [] } = {}) {
        this.id = id;
        this.title = title;
        this.columns = columns.map((item) => {
            const column = item;
            column.id = uuid();
            return column;
        });
    }
}
export default Board;
