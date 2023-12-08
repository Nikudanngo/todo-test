import { useState } from "react";
import { TodoCard } from "./TodoCard";
let i = 0;

function App() {
  const [addTodo, setAddTodo] = useState([]);
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
            setAddTodo(newTodo);
          }}
        >
          新規作成
        </button>
        {/* // ここにTodoCardを表示する */}
        {addTodo.map((todo) => {
          return <TodoCard key={todo} text={todo} />;
        })}
      </div>
      <div>テスト勉強</div>
    </div>
  );
}

export default App;
