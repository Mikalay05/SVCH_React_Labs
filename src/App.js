import * as React from "react";

import { Route, Routes } from "react-router-dom"

import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";

export default function Add() {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <NotFoundPage/>
          }
        />
      </Routes>
    </>
  );
}
