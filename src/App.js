import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from './component/AddTask';
import MyTask from './component/MyTask';
import Login from './component/Login';
import Register from "./component/Register";
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/"  element={<Home />}></Route>
        <Route path="/addtask" element={<AddTask />}></Route>
        <Route path="/mytask" element={<MyTask />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
