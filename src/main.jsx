import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Layout from "./layout.jsx";

import "./index.css";
import { UserContextProvider } from "./elements/common/context/UserContext/UserContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <Layout>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Layout>
  </UserContextProvider>
);
