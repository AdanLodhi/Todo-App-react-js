import { useState } from "react";
import "./todo.css";
import { TodoItem } from "./TodoItem";
import { AddTodo } from "./AddTodo";

export const TodoList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Learn Node ",
    },
    {
      id: 2,
      title: " Learn React",
    },
    {
      id: 3,
      title: "Learn Express ",
    },
    {
      id: 4,
      title: "Learn Mongo ",
    },
  ]);

  const deleteTodo = (id) => {
    const toBeDeletedIndex = items.findIndex((item) => item.id === id);
    items.splice(toBeDeletedIndex, 1);
    setItems([...items]);
  };

  const addTask = (title) => {
    if (!title) {
      return;
    }
    const newTask = { id: items.length + 1, title };
    const newItems = [...items, newTask];
    setItems(newItems);
  };

  return (
    <div>
      <div className="bar">
        <h2 className="heading">website todo</h2>
      </div>
      <div></div>
      <div className="todo-list shadow-Ig">
        {items.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            deleteTodo={() => {
              deleteTodo(item.id);
            }}
          />
        ))}
      </div>

      <AddTodo addTodo={addTask} />
    </div>
  );
};
