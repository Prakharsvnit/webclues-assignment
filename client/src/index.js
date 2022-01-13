import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import CreateUser from "./Components/CreateUser";
import UserDisplay from "./Components/UserDisplay";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="create-user" element={<CreateUser />} />
      <Route path="users" element={<UserDisplay />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);