import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Stack,
  Avatar,
  Link as MUI_Link,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../assets/img/Logo.png";

const Footer = ({ classes }) => {
  return (
    <Box
      className={classes.footer}
      sx={{ padding: { sm: "40px 30px", md: "40px 60px" } }}
      component="footer"
    >
      <Grid container columnSpacing={3} rowSpacing={2} className="grid">
        <Grid item xs={12} md={4} className="grid_item">
          <Box className="imgHolder">
            <img src={Logo} alt="logo" />
          </Box>
          <Typography component="p">
            The first Palestinian Arab platform to collect programmers and
            creative designers in the Arab world, and provides them with unique
            opportunities and jobs, and makes it easier for companies to search
            and employ
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} className="grid_item">
          <Typography component="h6" gutterBottom>
            Useful Links
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={4}>
              <Link to="/">Home</Link>
              <Link to="/wrk-flds">Work Fields</Link>
              <Link to="/developers">Developers</Link>
              <Link to="/about"> About</Link>
            </Grid>
            <Grid item md={4}>
              <Link to="/">My Account</Link>
              <Link to="/">Terms of use</Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} className="grid_item">
          <Typography component="h6" gutterBottom>
            Contact
          </Typography>

          <Typography variant="string" gutterBottom>
            622 Dixie Path, South 98336
          </Typography>
          <Typography variant="string" gutterBottom>
            +970599388102
          </Typography>
          <Typography variant="string" gutterBottom>
            info@menaalliances.com
          </Typography>
        </Grid>
      </Grid>
      <Box className="box">
        <Typography variant="string">© 2021 Mena Alliances</Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            marginTop: {
              xs: "10px",
              sm: "0",
            },
          }}
        >
          <MUI_Link
            href="https://www.google.com"
            underline="none"
            target="_blank"
          >
            <Avatar>G</Avatar>
          </MUI_Link>
          <MUI_Link
            href="https://www.facebook.com"
            underline="none"
            target="_blank"
          >
            <Avatar>f</Avatar>
          </MUI_Link>
          <MUI_Link
            href="https://www.linkedin.com"
            underline="none"
            target="_blank"
          >
            <Avatar>in</Avatar>
          </MUI_Link>
          <MUI_Link href="https://twitter.com" underline="none" target="_blank">
            <Avatar>
              <TwitterIcon />
            </Avatar>
          </MUI_Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
