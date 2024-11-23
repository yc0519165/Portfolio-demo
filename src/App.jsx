import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Body } from "./pages/Body";
import { HomePage } from "./pages/HomePage";
import { Project } from "./pages/Project";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
