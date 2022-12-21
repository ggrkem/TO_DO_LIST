import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import uuid from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
   
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Görev"
        type=""
        name="Görev"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">Onayla</Button>
    </form>
  );
}

export default TodoForm;
