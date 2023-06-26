// App.js
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import ShoppingCart from "./components/pages/ShoppingCart";
import HeadNavbar from "./components/pages/HeadNavbar";
import Footer from "./components/pages/Footer";
import Product from "./components/pages/Product";
import uniqid from "uniqid";
import products from "./components/products/products";
import ErrorPage from "./components/pages/ErrorPage";

const App = () => {
  const [cart, setCart] = useState([]);
  const [amountInCart, setAmountInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [gender, setGender] = useState("men");
  const [category, setCategory] = useState("men");
  const [setsearchValue, setSetsearchValue] = useState("");

 


  useEffect(() => {
    let price = 0;
    cart.forEach((e) => (price += e.quantity * e.product.price));
    setTotalPrice(price);
  }, [amountInCart]);

  // ensure that page scrolls to top on tab change
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  const handleAddToCart = (e, size) => {
    const itemExists = cart.some(
      (item) => item.product.name === e.name && item.size === size
    );

    if (itemExists) {
      setCart((cart) =>
        cart.map((item) =>
          item.product.name === e.name && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((cart) => [...cart, { product: e, size: size, quantity: 1 }]);
    }

    setAmountInCart((amountInCart) => amountInCart + 1);
  };

  return (
    <>
      <ScrollToTop />
      <HeadNavbar amountInCart={amountInCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              gender={gender}
              category={category}
              setGender={setGender}
              setCategory={setCategory}
            />
          }
        />
        <Route path="/about" element={<About />} />
        {products.map((e) => {
          return (
            <Route
              key={uniqid()}
              path={`/shop/${e.name.replace(/\s/g, "-")}`}
              element={<Product e={e} handleAddToCart={handleAddToCart} />}
            />
          );
        })}
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCart
              cart={cart}
              setCart={setCart}
              amountInCart={amountInCart}
              setAmountInCart={setAmountInCart}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          }
        />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
