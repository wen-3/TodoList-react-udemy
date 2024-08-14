import { FC, useState } from 'react';
import { getTodoItems, TodoItemModel } from './utils/getTodoItems';
import { TodoItem } from './TodoItem';

const items = getTodoItems(10);

export const TodoList: FC = () => {
    const [todos, setTodos] = useState<TodoItemModel[]>(items);
    const updateTodo = (id: string, update: Partial<TodoItemModel>) => {
        setTodos(todos.map(i => i.id === id ? {...i, ...update} : i));
    };
    const deleteTodo = (id: string) => {
        setTodos(todos.filter(i => i.id !== id));
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
        </>
    );
}