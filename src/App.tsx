import 'bulma/css/bulma.min.css';
import { Editor } from './Todos/Editor';

export const App = () => {
  const todo = {
    title: 'title',
    content: 'content',
    priority: 0,
    assignee: 'chris',
    resolved: false,
  }

  return (
    <>
      <Editor {...todo}/>
    </>
  );
};
