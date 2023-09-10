import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Users />,
//       },
//       { path: "/places/new", element: <NewPlace /> },
//       { path: "/:userId/places", element: <UserPlaces /> },
//       { path: "/places/:placeId", element: <UpdatePlace /> },
//       { path: "/auth", element: <Auth /> },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
