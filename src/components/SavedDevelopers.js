import React, { useState } from "react";
import {
  Box,
  Container,
  Avatar,
  Typography,
  Stack,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import Developer from "../assets/img/Developer2.png";
const SavedDevelopers = ({ classes }) => {
  const [selected, setselected] = useState(false);
  const developers = [
    {
      id: "1",
      prof_pict: Developer,
      name: "Ali Omar1",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      skills: ["Lorem", "Ipsum", "simply dummy", "text"],
    },
    {
      id: "2",
      prof_pict: Developer,
      name: "Ali Omar2",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      skills: ["Skill1", "Skill2", "Skill3", "Skill4"],
    },
    {
      id: "3",
      prof_pict: Developer,
      name: "Ali Omar3",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      skills: ["Skill1", "Skill2", "Skill3", "Skill4"],
    },
    {
      id: "4",
      prof_pict: Developer,
      name: "Ali Omar4",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      skills: ["Skill1", "Skill2", "Skill3", "Skill4"],
    },
    {
      id: "5",
      prof_pict: Developer,
      name: "Ali Omar5",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      skills: ["Skill1", "Skill2", "Skill3", "Skill4"],
    },
    {
      id: "6",
      prof_pict: Developer,
      name: "Ali Omar6",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      skills: ["Skill1", "Skill2", "Skill3", "Skill4"],
    },
    {
      id: "7",
      prof_pict: Developer,
      name: "Ali Omar7",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      skills: ["Skill1", "Skill2", "Skill3", "Skill4"],
    },
    {
      id: "8",
      prof_pict: Developer,
      name: "Ali Omar8",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      skills: ["Skill1", "Skill2", "Skill3", "Skill4"],
    },
    {
      id: "9",
      prof_pict: Developer,
      name: "Ali Omar9",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      skills: ["Skill1", "Skill2", "Skill3", "Skill4"],
    },
    {
      id: "10",
      prof_pict: Developer,
      name: "Ali Omar10",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      skills: ["Skill1", "Skill2", "Skill3", "Skill4"],
    },
  ];

  return (
    <Box className={classes.savedDevelopers} component="main">
      <Container maxWidth="xl" className="container">
        {!selected ? (
          <Button
            variant="contained"
            startIcon={<FormatListBulletedOutlinedIcon fontSize="inherit" />}
            className="select"
            onClick={() => setselected(!selected)}
          >
            Select all developers
          </Button>
        ) : (
          <IconButton
            size="large"
            className="close"
            onClick={() => setselected(!selected)}
          >
            <CloseRoundedIcon fontSize="inherit" />
          </IconButton>
        )}

        <Stack direction="row" className="stack">
          {developers.map((developer) => (
            <Card
              className="card"
              // className="card selected"
              key={developer.id}
              sx={{
                width: {
                  xs: "100%",
                  md: "49%",
                },
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Avatar alt="Developer Photo" src={developer.prof_pict} />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {developer.name}
                </Typography>
                <Typography variant="body2">{developer.bio}</Typography>
                <Typography variant="body2">
                  <Typography variant="subtitle1" component="span">
                    Skills :
                  </Typography>
                  {developer.skills.join(", ")}.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  alignSelf: {
                    xs: "flex-end",
                    md: "unset",
                  },
                  order: {
                    xs: "-1",
                    md: "unset",
                  },
                }}
              >
                <IconButton size="small">
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </Stack>
        <Box component="form">
          <TextField
            id="outlined-textarea"
            label="Message"
            placeholder=""
            multiline
            required
            fullWidth
            rows={9}
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
      </Container>
    </Box>
  );
};

export default SavedDevelopers;
