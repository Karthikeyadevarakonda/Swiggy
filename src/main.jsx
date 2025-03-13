import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import RestaurantDetails from "./RestaurantDetails.jsx";


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantDetails/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={myRouter} />
);
