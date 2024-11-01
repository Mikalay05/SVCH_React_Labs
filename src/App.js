import * as React from "react";

import { Route, Routes } from "react-router-dom"

import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import Header from "./Components/Header/Header";
import TableAboutGramma from "./Components/TableAboutGramma/TableAboutGramma";

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
          <Route
          path="product-support"
          element={
            <>
            <TableAboutGramma/>
            </>
          }/>
        </Routes>

    </>
  );
}
