import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Users from "./user/pages/Users.jsx";
import NewPlace from "./places/pages/NewPlace.jsx";
import UserPlaces from "./places/pages/UserPlaces.jsx";
import UpdatePlace from "./places/pages/UpdatePlace.jsx";

import "./index.css";
import Auth from "./user/pages/Auth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Users />,
      },
      { path: "/places/new", element: <NewPlace /> },
      { path: "/:userId/places", element: <UserPlaces /> },
      { path: "/places/:placeId", element: <UpdatePlace /> },
      { path: "/auth", element: <Auth /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
