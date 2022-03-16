import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Box, Typography, TextField, Button, Link } from "@mui/material";
import useStyles from "../components/Styles";
import LogRegBGI from "../assets/img/LogRegBGI.png";

const Registration = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const loginlinkHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: "changePage",
      page: "login",
    });
  };
  return (
    <div>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={12} md={6}>
          <Box className={classes.formP} sx={{ mt: 9 }}>
            {/* Blue bubbles for form background */}
            <Box
              component={"span"}
              sx={{
                right: "20px",
                top: "-10%",
              }}
            ></Box>
            <Box
              component={"span"}
              sx={{
                left: "150px",
                top: "-5%",
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

            <Typography component="h1">Create An Account</Typography>

            <Typography component="h3">
              Please fill the input with your full information.
            </Typography>
            <Box component="form">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="firstName"
                    label="first Name"
                    name="firstName"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="lastName"
                    label="last Name"
                    name="lastName"
                    required
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="username"
                    label="username"
                    name="username"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    label="email"
                    name="email"
                    autoComplete="email"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    label="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid
                container
                sx={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <Grid item md={5} sx={{ alignSelf: "flex-end", width: "100%" }}>
                  <Button type="submit" variant="contained" fullWidth>
                    create now
                  </Button>
                </Grid>

                <Grid item sx={{ alignSelf: "center" }}>
                  <Typography component="span" variant="body2">
                    Already have an account?
                    <Link href="#" underline="hover" onClick={loginlinkHandler}>
                      Login
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

export default Registration;
