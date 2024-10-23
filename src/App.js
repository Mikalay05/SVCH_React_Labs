import * as React from "react";

import { Route, Routes } from "react-router-dom"

import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import Header from "./Components/Header/Header";

export default function Add() {
  return (
    <>
    <Header/>
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
