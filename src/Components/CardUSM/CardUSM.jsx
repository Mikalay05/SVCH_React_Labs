import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function CardUSM({ objEpic, isActiveElement, showAddIcon, onClick }) {
  const getCardStyle = (isActive) => ({
    display: "flex",
    width: isActive ? "400px" : "300px",
    height: "150px",
    padding: "10px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "35px",
    background: isActive ? "rgba(75, 245, 231, 0.50)" : "rgba(75, 245, 231, 0.2)",
  });

  const contentCardStyle = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  return (
    <Card id={`EpicId${objEpic.EpicId}`} sx={getCardStyle(isActiveElement)} onClick={onClick}>
      <CardContent>
        {showAddIcon ? (
          <AddIcon style={{ fontSize: "40px", color: "#000" }} />
        ) : (
          <Typography sx={contentCardStyle}>{objEpic.EpicName}</Typography>
        )}
      </CardContent>
    </Card>
  );
}
