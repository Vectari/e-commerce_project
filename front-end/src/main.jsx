import "./styles/theme.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Cart } from "./views/Cart/Cart";
import { Favourites } from "./views/Favourites/Favourites";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./views/MainPage/MainPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/koszyk",
        element: <Cart />,
      },
      {
        path: "/ulubione",
        element: <Favourites />,
      },
      {
        path: "/:gender",
        element: <MainPage />,
        loader: ({ params }) => {
          const PATH_TO_ENDPOINT_MAPPING = {
            kobieta: "women",
            mezczyzna: "men",
            dziecko: "children",
          };

          const backEndPath = PATH_TO_ENDPOINT_MAPPING[params.gender];
          if (backEndPath) {
            return fetch(`http://localhost:3000/${backEndPath}`);
          } else {
            return redirect("/kobieta");
          }
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
