import { useState } from "react";
import { TodoCard } from "./TodoCard";

let i = 0;

function App() {
  const [addTodo, setAddTodo] = useState([]);
  const [inputText, setInputText] = useState("");
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "300px",
          backgroundColor: "#D9D9D9",
        }}
      >
        <h2>Todo</h2>
        <button
          onClick={() => {
            const newTodo = [...addTodo, i++];
            console.log(newTodo);
            addTodo.filter();
            setAddTodo(newTodo);
          }}
        >
          新規作成
        </button>
        {addTodo.map((todo, i) => {
          return (
            <TodoCard
              id={i}
              text={todo}
              addTodo={addTodo}
              setAddTodo={setAddTodo}
            />
          );
        })}
      </div>
      <div>
        <h2>新規登録</h2>
        <input
          onChange={(e) => {
            console.log(e.target.value);
            setInputText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const newTodo = [...addTodo, inputText];
            console.log(newTodo);
            setAddTodo(newTodo);
          }}
        >
          登録
        </button>
        <p>{inputText}</p>
      </div>
    </div>
  );
}

export default App;
