import { useAppSelector } from '../hook';
import TodoItem from './TodoItem';
import React from "react";

const TodoList: React.FC = () => {
  const todos = useAppSelector(state => state.todos.list);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;