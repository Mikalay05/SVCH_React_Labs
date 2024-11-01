import React, { useState } from "react";

import DataEpics from "../../Json/EpicData.json";

import { Card, CardContent, Typography } from "@mui/material";

import CardUSM from "../CardUSM/CardUSM";

export default function SliderUSM() {
  const resultCard = DataEpics.map((epic, index) => {
    return <CardUSM key={index} objEpic={epic} />;
  });

  return <>{resultCard}</>;
}
