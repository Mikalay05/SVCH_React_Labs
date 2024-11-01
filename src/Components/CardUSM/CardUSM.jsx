import React, { useState } from "react";

import { Card, CardContent, Typography } from "@mui/material";

export default function CardUSM({ objEpic }) {
  return (
    <Card
      id={"EpicId" + objEpic.EpicId}
      sx={{
        display: "flex",
        width: "300px",
        height: "150px",
        padding: "10px",
        flexDirection: "column",
        justifyContent: " center",
        alignItems: "center",
        gap: "10px",
        borderRadius: "35px",
        background: "rgba(75, 245, 231, 0.2)",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            color: "#000",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
        >
          {objEpic.EpicName}
        </Typography>
      </CardContent>
    </Card>
  );
}
