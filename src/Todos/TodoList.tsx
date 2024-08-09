import { FC } from 'react';
import { getTodoItems } from './utils/getTodoItems';
import { Priority, TodoItem } from './TodoItem';

export const TodoList: FC = () => {
    const items = getTodoItems(10);

    // 將 items 依照 priority 分類，並透過 map 轉換成 TodoItem 元件
    const getPriority = Object.values(Priority)
        .filter(value => typeof value === 'number')

    const todoItems = getPriority
        .map(value => items
            .filter(item => item.priority === value)
            .map(item => <div className='column is-2'><TodoItem {...item} /></div>))

    console.log(todoItems);


    return (
        <>
            {getPriority
                .map(index => (
                    <section className='section'>
                        <div className='container'>
                            <h1>{Priority[index]}</h1>
                            <br />
                            <div className='columns is-multiline'>
                                {todoItems[index]}
                            </div>
                        </div>
                    </section>
                ))}
        </>
    );
}