import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import LoginPage from "./routes/Login";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={<ProtectedRoute element={LoginPage} path="/login" />}
        />
        <Route path="/" element={<ProtectedRoute element={Home} path="/" />} />
      </Routes>
    </div>
  );
}

export default App;
