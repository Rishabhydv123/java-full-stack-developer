import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { CounterContext } from "./Context/CounterContext";
import { TodoProvider } from "./Context/TodoContext"; // ✅ correct import

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TodoProvider>   {/* ✅ correct provider */}
      <CounterContext>
        <App />
      </CounterContext>
    </TodoProvider>
  </BrowserRouter>
);