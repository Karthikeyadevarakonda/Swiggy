import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
// import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Cart from "./Cart.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import RestaurantDetails from "./RestaurantDetails.jsx";
import CartStore from "./Utils/CartStore.js";
import { Provider } from "react-redux";
import TheMainPage from "./TheMainPage.jsx";
const MainLayout = () => {
  const [MainBtn,setMainBtn] = useState(false);
  return (
    <>
    {MainBtn ?
    <>
    <Navbar />
    <Outlet />
    </>
    :<TheMainPage setMainBtn={setMainBtn}/>
    }
    </>
  );
};

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      // {
      //   path: "contact",
      //   element: <Contact />,
      // },
      {
        path: "cart",
        element: <Cart/>,
      },
      {
        path: "/restaurant/:id", 
        element: <RestaurantDetails />,
      },
    ],
  },
  
]);

createRoot(document.getElementById("root")).render(
    <Provider store={CartStore}>
    <RouterProvider router={myRouter} />
     </Provider>
);
