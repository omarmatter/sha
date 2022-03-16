import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ContactUsBGI from "../assets/img/ContactUsBGI.png";

const ContactUs = ({ classes }) => {
  //Country calling code
  const CCCodes = ["+970", "+966"];

  const [CCCode, setCCCode] = useState("+970");

  const CCCodeHandler = (event) => {
    setCCCode(event.target.value);
  };

  return (
    <Box className={classes.contactUs} component="main">
      <Container maxWidth="xl" className="container">
        <Box className="text">
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: {
                xs: "justify",
                md: "left",
              },
            }}
          >
            Do you have any questions, suggestions, feel free to communicate
            with us, and we will help you answer all your queries?
          </Typography>
        </Box>
        <Paper elevation={16} square className="paper">
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box className="form_holder">
                <Box component="form">
                  <TextField
                    margin="normal"
                    name="fullName"
                    id="name"
                    label="Name"
                    autoComplete="name"
                    required
                    fullWidth
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                      <FormControl fullWidth margin="normal">
                        <Select
                          value={CCCode}
                          onChange={CCCodeHandler}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          IconComponent={KeyboardArrowDownOutlinedIcon}
                        >
                          {CCCodes.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={9}>
                      <TextField
                        margin="normal"
                        name="phNum"
                        id="phNum"
                        label="Phone Number"
                        autoComplete="phNum"
                        required
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    margin="normal"
                    name="email"
                    id="email"
                    label="Email"
                    autoComplete="email"
                    required
                    fullWidth
                  />

                  <TextField
                    id="outlined-textarea"
                    label="Message"
                    placeholder=""
                    multiline
                    required
                    fullWidth
                    rows={7}
                    margin="normal"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: {
                        xs: "100%",
                        md: "240px",
                      },
                    }}
                  >
                    send
                  </Button>
                </Box>

                <Typography variant="body1">
                  By taking this action, you agree to the terms, conditions and
                  privacy policy.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={false}
              md={6}
              sx={{
                backgroundImage: `url(${ContactUsBGI})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                // backgroundPosition: "center center",
              }}
            ></Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactUs;
