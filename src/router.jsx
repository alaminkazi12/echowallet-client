import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Auth from "./pages/Auth";
import Signup from "./pages/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
]);

export default router;
