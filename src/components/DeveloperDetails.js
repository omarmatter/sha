import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Avatar,
  Typography,
  Stack,
  Paper,
  List,
  ListItem,
  Link,
  Button,
  IconButton,
} from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Developer from "../assets/img/Developer2.png";

const DeveloperDetails = ({ classes }) => {
  const developer_details = {
    id: "1",
    prof_pict: Developer,
    name: "Ali Omar",
    bio: `Edit your CV in just a few minutes with our online creation platform. 
    Edit your CV in just a few minutes with our online creation platform. 
    Edit your CV in just a few minutes with our online creation platform. 
    Edit your CV in just a few minutes with our online creation Edit your CV in just a few minutes with our online creation platform. 
    Edit your CV in just a few minutes with our online creation platform. 
    Edit your CV in just a few minutes with our online creation platform. 
    Edit your CV in just a few minutes with our online creation Edit your CV in just a few minutes with our online creation platform. 
    Edit your CV in just a few minutes with our online creation platform. Edit your CV in just a few minutes with our online creation platform. 
    Edit your CV in just a few minutes with our online creation`,
    skills: [
      "html",
      "html",
      "html",
      "html",
      "html",
      "html",
      "html",
      "html",
      "html",
    ],
    projects: [
      "www.project1.com",
      "www.project1.com",
      "www.project1.com",
      "www.project1.com",
    ],
    experiences: [
      {
        interval: "Feb 2018 - Sep 2018",
        position: "Web Developer At Local Company",
        pos_dtls: `
        Edit your CV in just a few minutes with our online creation platform. 
        Edit your CV in just a few minutes with our online creation platform. 
        Edit your CV in just a few minutes with our online creation platform. 
        Edit your CV in just a few minutes with our online creation Edit your CV in just a few minutes with our online creation platform. 
        Edit your CV in just a few minutes with our online creation platform. 
        Edit your CV in just a few minutes with our online creation platform. 
        Edit your CV in just a few minutes with our online creation Edit your CV in just a few minutes with our online creation platform. 
        Edit your CV`,
      },
    ],
  };

  const [saved, setSaved] = useState(false);

  return (
    <Box className={classes.dlperDtls} component="main">
      <Container maxWidth="xl" className="container">
        <Grid container spacing={3}>
          <Grid item xs={12} md={5} className="left">
            <Avatar
              alt="Developer Photo"
              src={developer_details.prof_pict}
              className="avatar"
            />
            <Box className="skills">
              <Typography variant="h3" gutterBottom>
                Skills
              </Typography>
              <Stack direction="row" className="stack">
                {developer_details.skills.map((skill, index) => (
                  <Paper elevation={3} className="paper" key={skill + index}>
                    <Typography component="span">{skill}</Typography>
                  </Paper>
                ))}
              </Stack>
            </Box>
            <Box className="projects">
              <Typography variant="h3" gutterBottom>
                Project's
              </Typography>
              <List>
                {developer_details.projects.map((project, index) => (
                  <ListItem key={project + index}>
                    <Box component={"span"} />
                    <Link
                      href="https://www.google.com"
                      target="_blank"
                      underline="hover"
                    >
                      {project}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} className="right">
            <Box className="bio">
              <Box className="bio_header">
                <Typography variant="h3">{developer_details.name}</Typography>
                <Box className="bttns">
                  <IconButton size="medium" onClick={() => setSaved(!saved)}>
                    {!saved ? (
                      <StarBorderRoundedIcon fontSize="inherit" />
                    ) : (
                      <StarRoundedIcon fontSize="inherit" />
                    )}
                  </IconButton>
                  <Button variant="contained" size="large">
                    Download CV
                  </Button>
                </Box>
              </Box>

              <Typography variant="body1"> {developer_details.bio}</Typography>
            </Box>
            <Box className="experience">
              <Typography variant="h3" gutterBottom>
                Work Experience
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DeveloperDetails;
