import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import Todoitems from "./Todoitems"; 

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
  );

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white shadow-lg w-full max-w-lg mx-auto flex flex-col p-6 min-h-[550px] rounded-xl">
      {/*----title------*/}
      <div className="flex items-center mt-5 gap-3">
        <img className="w-10" src={todo_icon} alt="Todo Icon" />
        <h1 className="text-4xl font-bold text-black">TO-DO List</h1>
      </div>

      {/*----input box------*/}
      <div className="flex items-center my-6 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg shadow-sm">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-4 placeholder-gray-600 text-black"
          type="text"
          placeholder="What needs to be done?"
        />
        <button
          onClick={add}
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition duration-300 rounded-lg w-36 h-14 text-white text-lg font-semibold"
        >
          ADD +
        </button>
      </div>

      {/*----todo list------*/}
      <div className="flex flex-col gap-3">
        {todoList.map((item, index) => {
          return (
            <Todoitems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
              textColor="text-black"  // Pass this prop to handle text color
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;




