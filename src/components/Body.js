import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Body = () => {
  // 1. Method 1
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    // 2. Method 2
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/browse" element={<Browse />} />
    //   </Routes>
    // </BrowserRouter>

    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
