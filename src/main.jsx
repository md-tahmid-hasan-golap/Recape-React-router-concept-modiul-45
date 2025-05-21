import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Roots/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Mobiles from "./components/mobile/Mobiles.jsx";
import Laptops from "./components/Laptops/Laptops.jsx";
import Users from "./components/users/Users.jsx";
import Users2 from "./components/users2/Users2.jsx";
const userPromised = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      {
        path: "laptops",
        Component: Laptops,
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),

        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<span>Loading ......</span>}>
            <Users2 userPromised={userPromised}></Users2>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/about",
    element: <div>About me here</div>,
  },
  {
    path: "blogs",
    element: <div>All my Blogs are here</div>,
  },
  {
    path: "/app",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
