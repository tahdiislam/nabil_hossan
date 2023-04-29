import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/router";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
