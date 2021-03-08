import { useEffect, useState } from "react";
import { TodoTable } from "./components/TodoTable";
import { axios } from "../src/services/httpService";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getTodos() {
      const response = await axios
        .get("/todos")
        .catch((err) => console.log('Error:", err'));

      if (response && response.data) setTodos(response.data);

      setIsLoading(false);
    }
    getTodos();
  }, []);

  if (isLoading) {
    return <>Loading.....</>;
  }

  return (
    <div className="App">
      <TodoTable todos={todos} />
    </div>
  );
}

export default App;
