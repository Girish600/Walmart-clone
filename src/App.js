import "./App.css";
import { lazy, Suspense } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { auth, provider } from "./firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
const Header = lazy(() => import("./Components/Header/Header"));
const Home = lazy(() => import("./Components/Home/Home"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Login = lazy(() => import("./Components/Login/Login"));
const SingleProduct = lazy(() => import("./Components/Product/SingleProduct"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Accounts = lazy(() => import("./Components/Acconts/Accounts"));
const Cart = lazy(() => import("./Components/Cart/Cart"));

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
        <Suspense fallback={<div className="loading" style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}><img src="./image/download1.png"/></div>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Contact-Us"
              element={
                <>
                  <Header />
                  <Contact />
                </>
              }
            />
            <Route
              path="/Login"
              element={
                <>
                  <Login />
                </>
              }
            ></Route>
            <Route
              path="/Cart"
              element={
                <>
                  <Header />
                  <Cart />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/product-details"
              element={
                <>
                  <Header />
                  <SingleProduct />
                </>
              }
            ></Route>
            <Route
              path="/Accounts"
              element={
                <>
                  <Header />
                  <Accounts />
                  <Footer />
                </>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
