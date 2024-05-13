import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// eslint-disable-next-line no-unused-vars
import { Provider } from "./context/task";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
