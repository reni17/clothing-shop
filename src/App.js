import "../src/categories.styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "../src/routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/sign-in/SignIn";
import { useState, useEffect, useReducer } from "react";
import { Shop } from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import {checkUserSession} from './store/user/userAction'
import {useDispatch} from 'react-redux'
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])


  return (
      
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route
                path="/"
                index
                element={<Home></Home>}
              ></Route>
              <Route
                path="shop/*"
                index
                element={<Shop/>}
              ></Route>
              <Route
                path="sign-in"
                index
                element={<SignIn ></SignIn>}
              ></Route>
              <Route
              path="checkout"
              index
              element ={<Checkout/>}
              ></Route>
            </Route>
          </Routes>
  );
}

export default App;
