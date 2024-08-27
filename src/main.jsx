import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import DetailsView from "./features/details/view/details_view";
import ErrorDetailsView from "./features/details/view/error_view";
import HomeView from "./features/home/view/home_view";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeState from "./features/product/context/home_state";
import CategoryState from "./features/category/context/category_state";
import DetailsState from "./features/details/context/details_state";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "details/:id",
    errorElement: <ErrorDetailsView />,
    element: <DetailsView />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomeState>
      <CategoryState>
        <DetailsState>
          <RouterProvider router={router} />
        </DetailsState>
      </CategoryState>
    </HomeState>
  </React.StrictMode>
);
