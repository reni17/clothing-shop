import "../src/categories.styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "../src/routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/sign-in/SignIn";
import { UserContext } from "./contexts/UserContext";
import {ProductContext} from './contexts/ProductContext'
import { useState, useEffect } from "react";
import { onAuthStateListener, createUserDocFromAuth, addCollectionAndDocuments, getCategoriesAndDocuments} from "./utils/firebase";
import { Shop } from "./routes/shop/Shop";
import { CartContext } from "./contexts/CartContext";
import Checkout from "./routes/checkout/Checkout";

function App() {
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCounter, setCartCounter] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const unsubscribe = onAuthStateListener((user) => {
      if(user) {
        createUserDocFromAuth(user);
      }
      setUser(user)
    })
 
  }, [])


  useEffect(() => {
    const getCategoriesMap = async() => {
      const categoryMap = await getCategoriesAndDocuments()
      console.log(categoryMap);
    }
    getCategoriesMap()
  }, [])

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, item) => total += item.quantity, 0)
    setCartCounter(newCartCount)
    const totalPrice = cartItems.reduce((result, item) => result += item.quantity * item.price, 0)
    setTotalPrice(totalPrice) 
  }, [cartItems])


  const addCartItem =(cartItems, productToAdd) => {

    const existingItem = cartItems.find(item => item.id === productToAdd.id)
    if(existingItem){
     return cartItems.map(cartItem => 
      cartItem.id == productToAdd.id ?{ ...cartItem, quantity: cartItem.quantity +1} : cartItem
      )
    }else{
      return [...cartItems, {...productToAdd, quantity:1}]   
    }

  }

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <UserContext.Provider value={{user, setUser}}>
      <ProductContext.Provider value = {{products, setProducts}}>
        <CartContext.Provider value = {{cart, setCart, cartItems, setCartItems, addItemToCart, cartCounter, totalPrice, setTotalPrice}}>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route
                path="/"
                index
                element={<Home categories={categories}></Home>}
              ></Route>
              <Route
                path="shop"
                index
                element={<Shop categories={categories}></Shop>}
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
       </CartContext.Provider>
      </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
