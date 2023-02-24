import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Pages/Shared/Navbar/Nav";
import { publicRoutes } from "./Routes/publicRoutes";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
