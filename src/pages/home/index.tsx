import { Button, Container } from "@mui/material";
import React from "react";
import { Navbar } from "../../common/Navbar";

export const HomePage = () => {
  return (
    <div>
      <Container sx={{ mt: 9 }}>
        <Button variant="contained">Home</Button>
      </Container>
    </div>
  );
};
