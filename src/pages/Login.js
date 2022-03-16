import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Box, Typography, TextField, Button, Link } from "@mui/material";
import useStyles from "../components/Styles";
import LogRegBGI from "../assets/img/LogRegBGI.png";

const Login = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const crtAcctlinkHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: "changePage",
      page: "registration",
    });
  };

  return (
    <div>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={12} md={6}>
          <Box className={classes.formP} sx={{ mt: 15 }}>
            {/* Blue bubbles for form background */}
            <Box
              component={"span"}
              sx={{
                right: "20px",
                top: "-20%",
              }}
            ></Box>
            <Box
              component={"span"}
              sx={{
                left: "150px",
                top: "-15%",
              }}
            ></Box>
            <Box
              component={"span"}
              sx={{
                top: "23%",
                left: "30px",
              }}
            ></Box>
            <Box
              component={"span"}
              sx={{
                bottom: "-5%",
                left: "45px",
              }}
            ></Box>
            <Box
              component={"span"}
              sx={{
                bottom: "-10%",
                left: "250px",
              }}
            ></Box>

            <Typography component="h1">Login</Typography>

            <Typography component="h3">
              Please login using account detail bellow.
            </Typography>
            <Box component="form">
              <TextField
                margin="normal"
                name="email"
                id="email"
                label="Email Address"
                autoComplete="email"
                required
                fullWidth
              />
              <TextField
                margin="normal"
                name="password"
                id="password"
                label="Password"
                autoComplete="current-password"
                type="password"
                required
                fullWidth
              />

              <Grid
                container
                sx={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <Grid item>
                  <Link href="#" underline="hover" variant="body2">
                    Forgot your password?
                  </Link>
                </Grid>
                <Grid item md={5} sx={{ alignSelf: "flex-end", width: "100%" }}>
                  <Button type="submit" variant="contained" fullWidth>
                    sign in
                  </Button>
                </Grid>

                <Grid item sx={{ alignSelf: "center" }}>
                  <Typography component="span" variant="body2">
                    Don’t have an Account?
                    <Link
                      underline="hover"
                      href="#"
                      onClick={crtAcctlinkHandler}
                    >
                      Create account
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          md={6}
          sx={{
            backgroundImage: `url(${LogRegBGI})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
      </Grid>
    </div>
  );
};

export default Login;
