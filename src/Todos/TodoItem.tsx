import { FC } from 'react';

export enum Priority {
  HIGH,
  MEDIUM,
  LOW,
}

export interface Props {
  title: string;
  content: string;
  priority: Priority;
  resolved: boolean;
}

export const TodoItem: FC<Props>= ({ title, content, priority, resolved}) => {
  const color = resolved ? '' :
    priority === Priority.HIGH ? 'is-danger' :
    priority === Priority.MEDIUM ? 'is-warning' :
    priority === Priority.LOW ? 'is-info' :
    'is-primary';

  return (
    <article className={`message ${color}`}>
      <div className="message-header">
        <p>{title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {content}
      </div>
    </article>
  );
}
