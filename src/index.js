import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Main />
  </Router>
);
