import 'bulma/css/bulma.min.css';
import { Editor } from './Todos/Editor';
import { TodoItem } from './Todos/TodoItem';

export const App = () => {
  const todo = {
    id: '5656-555666',
    title: 'title',
    content: 'content',
    priority: 2,
    assignee: 'chris',
    resolved: false,
  }

  return (
    <>
      <TodoItem {...todo}/>
    </>
  );
};
