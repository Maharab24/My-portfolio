import { createBrowserRouter, Navigate } from "react-router-dom";
import MyLayout from "../layout/myLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import AI from "../pages/AI";
import Web from "../pages/Web";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },

      {
        path: "/projects",
        element: <Navigate to={{ pathname: '/', hash: '#projects' }} replace />
      },
      { path: "/skills", element: <Skills /> },
      { path: "/contact", element: <Contact /> },
      { path: "/AI", element: <AI /> },
      { path: "/Web", element: <Web /> },
    ],
  },
]);

export default router;
