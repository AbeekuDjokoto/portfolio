"use client";
import React from "react";
import { RouterProvider } from "react-router-dom";

import { Providers } from "./Providers";
import { AppRouter } from "./routes/Routes";

function App() {
  return (
    <Providers>
      <RouterProvider router={AppRouter} />
    </Providers>
  );
}

export default App;