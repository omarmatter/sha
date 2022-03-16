import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Button,
  Stack,
  Card,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  Pagination,
  TextField,
} from "@mui/material";
import Developer from "../assets/img/Developer2.png";
import SearchIcon from "@mui/icons-material/Search";
import { getAllDevelopers } from "../APICall/DeveloperAPI";

const Developers = ({ classes }) => {
  const developers2 = [
    {
      id: "1",
      img: Developer,
      name: "Ali Omar1",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      skills: ["Lorem", "Ipsum", "simply dummy", "text"],
    },
    {
      id: "2",
      img: Developer,
      name: "Ali Omar2",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      skills: ["Skill1", "Skill2", "Skill3", "Skill4"],
    },
    {
      id: "3",
      img: Developer,
      name: "Ali Omar3",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      skills: ["Skill1", "Skill2", "Skill3", "Skill4"],
    },
    {
      id: "4",
      img: Developer,
      name: "Ali Omar4",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      skills: ["Skill1", "Skill2", "Skill3", "Skill4"],
    },
    {
      id: "5",
      img: Developer,
      name: "Ali Omar5",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      skills: ["Skill1", "Skill2", "Skill3", "Skill4"],
    },
    {
      id: "6",
      img: Developer,
      name: "Ali Omar6",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      skills: ["Skill1", "Skill2", "Skill3", "Skill4"],
    },
  ];
  const [developers, setDevelopers] = useState([]);
  const [paginationCount, setPaginationCount] = useState(0);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    getAllDevelopers(pageNum).then((res) => {
      setDevelopers(res.data.data);
      setPaginationCount(res.data.paginate.page);
    });
  }, [pageNum]);
  return (
    <Box className={classes.developers} component="main">
      <Container maxWidth="xl" className="container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={9}>
            <Box className="searchBar">
              <TextField label="Search" variant="outlined" type="search" />
              <Button variant="contained">
                <SearchIcon />
              </Button>
            </Box>
            <Stack spacing={2} className="stack">
              {developers.map((developer) => (
                <Card className="card" key={developer.id}>
                  <Avatar alt="Developer Photo" src={developer.image} />
                  <CardContent>
                    <Link to="/dlper-dtls">
                      <Typography gutterBottom variant="h6">
                        {developer.name}
                      </Typography>
                    </Link>
                    <Typography variant="body2">{developer.bio}</Typography>
                    <Typography variant="body2">
                      <Typography variant="subtitle1" component="span">
                        Skills :
                      </Typography>
                      {developer.tags.map((tag) => tag.name).join(", ")}.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained">Download CV</Button>
                  </CardActions>
                </Card>
              ))}
            </Stack>
            <Pagination
              count={paginationCount}
              variant="outlined"
              shape="rounded"
              size="large"
              onChange={(event, value) => {
                setPageNum(value);
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Developers;
