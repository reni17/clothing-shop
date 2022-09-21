import "../src/categories.styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "../src/routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/sign-in/SignIn";
import { useState, useEffect, useReducer } from "react";
import { onAuthStateListener, createUserDocFromAuth, addCollectionAndDocuments, getCategoriesAndDocuments} from "./utils/firebase";
import { Shop } from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import {setUser} from './store/user/userAction'
import {useDispatch} from 'react-redux'
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    
      const unsubscribe = onAuthStateListener((user) => {
      if(user) {
        createUserDocFromAuth(user);
      }
     dispatch(setUser(user))
    })
    
  }, [dispatch])


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
