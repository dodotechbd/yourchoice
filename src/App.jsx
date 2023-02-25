import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Authentication/RequierAuth";
import Footer from "./Pages/Shared/Footer/Footer";
import Nav from "./Pages/Shared/Navbar/Nav";
import { privateRoutes } from "./Routes/privateRoutes";
import { publicRoutes } from "./Routes/publicRoutes";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route element={<RequireAuth />}>
          {privateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
