import _ from 'lodash';

export interface TodoItemModel {
  title: string;
  content: string;
  priority: number;
  resolved: boolean;
  createdAt: number;
  lastModifiedAt: number;
}

export const getTodoItems = (n: number): TodoItemModel[] =>
  _.range(n).map(i => {
    const t = Date.now();
    return {
      title: `title ${i}`,
      content: `content ${i} `.repeat(10),
      priority: i % 3,
      resolved: !(i % 7),
      createdAt: t,
      lastModifiedAt: t,
    }
  });
