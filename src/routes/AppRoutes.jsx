import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../layout/myLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";

// Export your router
const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout></MyLayout>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/skills", element: <Skills /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
