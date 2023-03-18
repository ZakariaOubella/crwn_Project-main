import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Routes/Home/home.component";

import Navigation from "./Routes/Navigation/navigation.component";
import Authentication from "./Routes/Authentication/authentication.component";
import Shop from "./Routes/Shop/shop.component";
import CheckOut from "./Component/checkOut/checkOut.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;

// wanaaaaaaaaaari nasi (/*) makhdemch had zeft 3erregni