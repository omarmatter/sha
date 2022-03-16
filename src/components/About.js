import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import AboutImg1 from "../assets/img/AboutImg1.png";
import AboutImg2 from "../assets/img/AboutImg2.png";

const About = ({ classes }) => {
  return (
    <Box
      className={classes.about}
      component="main"
      sx={{
        fontSize: {
          xs: 10,
          sm: 12,
          md: 16,
        },
      }}
    >
      <Box className="about_header">
        <Grid container className="grid">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: {
                xs: 2,
                md: "unset",
              },
            }}
          >
            <Box className="text">
              <Typography variant="h3" gutterBottom>
                Who is M<Typography variant="span">E</Typography>NA{" "}
                <Typography variant="span">A</Typography>lliances?
              </Typography>
              <Typography variant="body1">
                an outsourcing company- for a profit with a social mission -
                that aims to provide a high-quality remote workforce on-demand
                to solve the problem of a local talent shortage for automation
                while creating economic opportunities for women and young people
                in the Middle East and North Africa. Our teams have the ability
                to scale in a short time and handle small to large projects.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundImage: `url(${AboutImg1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: {
                xs: "center center",
                md: "unset",
              },
              height: {
                xs: "30vh",
                md: "unset",
              },
            }}
          ></Grid>
        </Grid>
      </Box>
      <Box className="about_main">
        <Container maxWidth="lg" className="container">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box elevation={0} className="img_holder">
                <img src={AboutImg2} alt="AboutImg2" />
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box className="text">
                <Typography variant="h3" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1">
                  Our mission is to help alleviate poverty and injustice in the
                  MENA region by creating jobs for ONE MILLION women and young
                  people in this region. So far, we have trained more than 3000
                  women and young people and created 700+ job opportunities for
                  disadvantaged people by connecting them with jobs from Europe,
                  the USA (such as Silicon Valley), and the Gulf region.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={12} md={5}>
              <Box className="text">
                <Typography variant="h3" gutterBottom>
                  Service Offerings
                </Typography>
                <Typography variant="body1">
                  We offer you the various services that a company or project is
                  about to require.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Stack spacing={2} className="services" alignItems="flex-end">
                <Paper elevation={0}>
                  <Typography variant="h6">
                    Automation (Out) Sourcing
                  </Typography>
                </Paper>
                <Paper elevation={0}>
                  <Typography variant="h6">
                    Automation (Out) Sourcing
                  </Typography>
                </Paper>
                <Paper elevation={0}>
                  <Typography variant="h6">Value-added services</Typography>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="about_footer">
        <Container maxWidth="xl" className="container">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box className="text">
                <Typography variant="h3" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="body1">
                  Do you have any questions, suggestions, feel free to
                  communicate with us, and we will help you answer all your
                  queries?
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="bttn_holder">
                <Button
                  variant="contained"
                  sx={{
                    width: {
                      xs: "100%",
                      md: "230px",
                    },
                  }}
                >
                  Contact Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
