import Account from "../Pages/Account/Account";
import Home from "../Pages/Home/Home";

export const publicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "account", name: "Account", Component: Account },
];
