import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <Container sx={{ textAlign: "center", mt: 10 }}>
      <Box>
        <ErrorOutlineIcon sx={{ fontSize: "100px", color: "primary.main" }} />
        <Typography variant="h1" component="h1" sx={{ mt: 2 }}>
          Упс! Страницу которую вы ищете, не существует!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          onClick={handleGoHome}
        >
          На главную
        </Button>
      </Box>
    </Container>
  );
}
