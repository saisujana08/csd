import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './login';
import Signup from './Signup';
import Next from './secure_qn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/Next' element={<Next />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
