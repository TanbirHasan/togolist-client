import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from './component/AddTask';
import MyTask from './component/MyTask';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/addtask" element={<AddTask />}></Route>
        <Route path="/mytask" element={<MyTask />}></Route>
      </Routes>
      <Header />
    </div>
  );
}

export default App;
