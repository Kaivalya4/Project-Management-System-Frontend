import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Layout from "./layout.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Layout>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Layout>
);
