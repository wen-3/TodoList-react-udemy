import _ from 'lodash';
import { v4 as uuid } from 'uuid';

export interface TodoItemModel {
  id: string;
  title: string;
  content: string;
  priority: number;
  resolved: boolean;
  assignee?: string;
  createdAt: number;
  lastModifiedAt: number;
}

export const getTodoItems = (n: number): TodoItemModel[] =>
  _.range(n).map(i => {
    const t = Date.now();
    return {
      id: uuid(),
      title: `title ${i}`,
      content: `content ${i} `.repeat(10),
      priority: i % 3,
      resolved: !(i % 7),
      createdAt: t,
      lastModifiedAt: t,
    }
  });
