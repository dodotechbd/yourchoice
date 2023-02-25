import Account from "../Pages/Account/Account";
import CreateAccount from "../Pages/Account/CreateAccount";
import Home from "../Pages/Home/Home";

export const publicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "account", name: "Account", Component: Account },
  { path: "register", name: "Account", Component: CreateAccount },
];
