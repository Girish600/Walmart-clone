import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login'
import SingleProduct from './Components/Product/SingleProduct';
import Footer from './Components/Footer/Footer';
import React, { useState } from "react";
import { auth, provider } from "./firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import Accounts from './Components/Acconts/Accounts';

function App() {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Header/><Home/><Footer/></>}/>
        <Route path='/Contact-Us' element={<><Header/><Contact/></>}/>
        <Route path='/Login' element={<><Login/></>}></Route>
        <Route path='/product-details' element={<><Header/><SingleProduct/></>}></Route>
        <Route path='/Accounts' element={<><Header/><Accounts/><Footer/></>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
