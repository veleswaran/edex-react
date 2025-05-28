import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import UserCreate from './pages/UserCreate.js';
import Users from './pages/Users.js';
import ProductCreate from './componeents/ProductCreate.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<UserCreate/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/product" element={<ProductCreate/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
