import * as React from "react";

import { Route, Routes } from "react-router-dom";

import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import Header from "./Components/Header/Header";
import TableAboutGramma from "./Components/TableAboutGramma/TableAboutGramma";
import SliderUSM from "./Components/SliderUSM/SliderUSM";

export default function Add() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="product-support"
          element={
            <>
              <TableAboutGramma />
            </>
          }
        />
        <Route path="company" element={<>
          <SliderUSM/></>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
