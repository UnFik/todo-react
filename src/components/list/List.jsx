import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import "./List.css";

const List = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [
      { text: "Learn React", id: 1, completed: false, editing: false },
      { text: "Build a to-do app", id: 2, completed: false, editing: false },
      { text: "Celebrate", id: 3, completed: false, editing: false },
    ]
  );

  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    setTodos([
      ...todos,
      {
        text: currentText,
        id: Date.now(),
        completed: false,
        editing: false,
      },
    ]);
    setCurrentText("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleEdit = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, editing: true };
        }
        return item;
      })
    );
    setCurrentText(todo.text);
  };

  const handleUpdate = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, text: currentText, editing: false };
        }
        return item;
      })
    );
    setCurrentText("");
  };

  return (
    <div className="container bg-neutral-700 mx-auto mt-10 pb-6">
      <form>
        <div className="mt-10 flex justify-center">
          <div className="textInputWrapper">
            <input
              placeholder="Add Agendas"
              type="text"
              className="textInput pr-10 h-20"
              value={currentText}
              onChange={(e) => setCurrentText(e.target.value)}
            />
          </div>
          <button className="ml-6 button" onClick={handleAdd}>
            Submit
          </button>
        </div>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            className="p-6 rounded-xl my-5 flex"
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.editing ? (
              <>
                <input
                  type="text"
                  value={currentText}
                  onChange={(e) => setCurrentText(e.target.value)}
                />
                <button
                  className="ml-10"
                  type="button"
                  onClick={() => handleUpdate(todo)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </>
            ) : (
              <>
                <label className="container__checkboxes mr-10 font-medium">
                  <input
                    className="p-3"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(todo.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <div className="uppercase font-bold">{todo.text}</div>
                <button
                  className="ml-10"
                  type="button"
                  onClick={() => handleDelete(todo.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />;
                </button>
                <button
                  className="ml-10 "
                  type="button"
                  onClick={() => handleEdit(todo)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
