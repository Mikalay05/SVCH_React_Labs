import * as React from "react";

import { Route, Routes } from "react-router-dom"

export default function Add() {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <>
              {" "}
              <p>я гей</p>
            </>
          }
        />
      </Routes>
    </>
  );
}
