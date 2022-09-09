import "../src/categories.styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "../src/routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/sign-in/SignIn";
import { UserContext } from "./contexts/UserContext";
import {ProductContext} from './contexts/ProductContext'
import { useState, useEffect } from "react";
import { onAuthStateListener, createUserDocFromAuth} from "./utils/firebase";
import { Shop } from "./routes/shop/Shop";
import ShopData from './shop-data.json'
import { CartContext } from "./contexts/CartContext";

function App() {
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState(ShopData)
  const [cart, setCart] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateListener((user) => {
      if(user) {
        createUserDocFromAuth(user);
      }
      setUser(user)
    })
 
  }, [])

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
        <CartContext.Provider value = {{cart, setCart}}>
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
            </Route>
          </Routes>
       </CartContext.Provider>
      </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
