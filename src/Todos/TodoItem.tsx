import { faList, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';
import { Editor } from './Editor';
import { TodoItemModel } from './utils/getTodoItems';

export enum Priority {
  HIGH,
  MEDIUM,
  LOW,
}

export interface Props {
  id: string;
  title: string;
  content: string;
  priority: Priority;
  assignee?: string;
  resolved: boolean;
  updateTodo: (id: string, update: Partial<TodoItemModel>) => void;
  deleteTodo: (id: string) => void;
}

export const TodoItem: FC<Props> = ({
  id,
  title,
  content,
  priority,
  assignee,
  resolved,
  updateTodo,
  deleteTodo 
  }) => {
  const [editing, setEditing] = useState<boolean>(false);
  const color = resolved ? '' :
    priority === Priority.HIGH ? 'is-danger' :
      priority === Priority.MEDIUM ? 'is-warning' :
        priority === Priority.LOW ? 'is-info' :
          'is-primary';
  const handleEditClick = () => setEditing(true);
  const handleCancelClick = () => setEditing(false);
  const handleDeleteClick = () => deleteTodo(id);

  return (
    editing
      ? <Editor {...{
        id,
        title,
        content,
        priority,
        resolved,
        assignee,
        updateTodo,
        deleteTodo,
        onCancel: handleCancelClick }} />
      : <article className={`message ${color}`}>
        <div className="message-header">
          <p>{title}</p>
          <span>
            <FontAwesomeIcon icon={faList} className='is-clickable mr-1' onClick={handleEditClick} />
            <FontAwesomeIcon icon={faTrashCan} className='is-clickable' onClick={handleDeleteClick}/>
          </span>
        </div>
        <div className="message-body">
          <div>
            {content}
          </div>
          <div className="columns is-mobile">
            <div className="column">
              <span className="has-text-grey-light is-size-7 is-8">{id}</span>
            </div>
            <div className='column has-text-right'>
              {
                assignee
                  ? <span className="has-text-grey-light is-size-7">{`assigned to @${assignee}`}</span>
                  : null
              }
            </div>
          </div>
        </div>
      </article>
  );
}
