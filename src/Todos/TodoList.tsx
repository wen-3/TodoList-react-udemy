import { FC, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { getTodoItems, TodoItemModel } from './utils/getTodoItems';
import { TodoItem } from './TodoItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { Editor, TodoItemModel as NewItemModel} from './Editor';

const items = getTodoItems(1);

export const TodoList: FC = () => {
    const [todos, setTodos] = useState<TodoItemModel[]>(items);
    const [creating, setCreating] = useState<boolean>(false);

    const createTodo = (newTodo: TodoItemModel) => {
        setTodos([...todos, newTodo]);
    };
    const updateTodo = (id: string, update: Partial<TodoItemModel>) => {
        setTodos(todos.map(i => i.id === id ? {...i, ...update} : i));
    };
    const deleteTodo = (id: string) => {
        setTodos(todos.filter(i => i.id !== id));
    };

    const handleCreateTodo = (todo: NewItemModel) => {
        const t = Date.now();
        createTodo({id: uuid(), createdAt: t, lastModifiedAt: t, ...todo});
        setCreating(false)
    };

    return (
        <>
            <div className='columns is-multiline'>
                {todos.map(i => (
                    <div className='column is-2' key={i.id}>
                        <TodoItem {...i} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    </div>
                ))}
            </div>
            {creating && <Editor onSave={handleCreateTodo} onCancel={() => setCreating(false)} />}
            <div>
                <button className='button is-rounded is-primary is-medium' onClick={() => setCreating(true)}>
                    <span className='icon'>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </span>
                </button>
            </div>
        </>
    );
}