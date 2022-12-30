import React from "react";
import { Navbar } from "../../common/Navbar";
import { Box, Button, Container, Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";

type LoginType = {
  username: string;
  password: string;
};

export const LoginPage = () => {
  const [loginData, setLoginData] = React.useState<LoginType>({
    username: "",
    password: "",
  });

  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(loginData);
  };
  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item>
            <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
              <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
                Iniciar Sesion
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  sx={{ mt: 2, mb: 1.5 }}
                  required
                  type="text"
                  name="username"
                  onChange={dataLogin}
                ></TextField>
                <TextField
                  name="password"
                  onChange={dataLogin}
                  fullWidth
                  margin="normal"
                  label="Password"
                  sx={{ mt: 2, mb: 1.5 }}
                  required
                  type="password"
                ></TextField>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{ mt: 1.5, mb: 3 }}
                >
                  Iniciar Sesion
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
