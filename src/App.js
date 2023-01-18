import "./App.css";
import { CssBaseline } from "@mui/material";
import Login from "./Pagess/Login/index";
import Home from "./Pagess/Home/index";
import { Button } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
