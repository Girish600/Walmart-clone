import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login'
import SingleProduct from './Components/Product/SingleProduct';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Header/><Home/><Footer/></>}/>
        <Route path='/Contact-Us' element={<><Header/><Contact/></>}/>
        <Route path='/Login' element={<><Login/></>}></Route>
        <Route path='/product-details' element={<><Header/><SingleProduct/></>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
