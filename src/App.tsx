import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home/index.js";
import Login from "./pages/login/index.js";
import Feed from "./pages/Feed/index.js";
import Cadastro from "./pages/Cadastro/index.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
      </Routes>
    </Router>
  );
}

export default App;
