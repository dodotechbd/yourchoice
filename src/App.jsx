import React from "react";
import Home from "./Pages/Home/Home";
import Nav from "./Pages/Shared/Navbar/Nav";
import Shop from "./Pages/Shop/Shop";

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Shop />
    </div>
  );
};

export default App;
