import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import './styles/main.scss'
import ItemDetail from "./components/ItemDetail/ItemDetail.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products/:id" element={<ItemDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
