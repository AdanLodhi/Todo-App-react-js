/* eslint-disable react/prop-types */
import deleteicon from "../assets/deleteicon.png";
import { useState } from "react";
import "./todo.css";

export const TodoItem = ({ title, deleteTodo }) => {
  const [check, setcheck] = useState(false);
  const checkBtn = () => {
    setcheck(!check);
  };

  return (
    <div
      className="todo-item"
      id="todo-1"
      style={{ backgroundColor: check ? "lightgreen" : "white" }}
    >
      <p className="todo-task-title" id="todo-task">
        {title}{" "}
      </p>
      <button className="chk-btn" onClick={checkBtn}>
        Done ✔{" "}
      </button>

      <img className="todo-icon" src={deleteicon} onClick={deleteTodo} />
    </div>
  );
};
