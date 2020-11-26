import React, { useState, useCallback, useEffect } from "react";

const App = () => {
  // Hooks
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onNewTodoChange = useCallback((e) => {
    setNewTodo(e.target.value);
  }, []);

  const formSubmitted = useCallback(
    (e) => {
      e.preventDefault();
      if (newTodo.trim() !== "") {
        setTodos([
          {
            id: todos.length ? todos[0].id + 1 : 1,
            content: newTodo,
            done: false,
          },
          ...todos,
        ]);
      }
      setNewTodo("");
    },
    [newTodo, todos]
  );
  const onCheckboxChange = (idx, todo) => (e) => {
    let newTodos = todos.map((el, elIdx) => {
      if (idx === elIdx) {
        el = todo;
        el["done"] = !todo.done;
        return el;
      } else return el;
    });
    setTodos(newTodos);
  };

  const deleteTodo = useCallback(
    (idx) => (e) => {
      let newTodos = todos.filter((el, index) => {
        return index !== idx;
      });
      setTodos(newTodos);
    },
    [todos]
  );

  useEffect(() => {}, [todos]);

  return (
    <div className="App">
      <form onSubmit={formSubmitted}>
        <label htmlFor="newTodo">Enter a Todo:</label>
        <input
          id="newTodo"
          name="newTodo"
          type="text"
          value={newTodo}
          onChange={onNewTodoChange}
        />
        <button>Create Todo</button>
      </form>
      <ul>
        {todos.map((todo, idx) => {
          return (
            <li key={todo.id}>
              <span className={todo.done ? "done" : null}>{todo.content}</span>
              <input
                checked={todo.done}
                onChange={onCheckboxChange(idx, todo)}
                type="checkbox"
              />
              <button onClick={deleteTodo(idx)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
