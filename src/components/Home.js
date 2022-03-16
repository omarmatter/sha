import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  TextField,
} from "@mui/material";
import { Carousel as TrendyolCarousel } from "@trendyol-js/react-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import SendIcon from "@mui/icons-material/Send";
import HomeBGI from "../assets/img/HomeBGI.png";
import WrkFlds1 from "../assets/img/WrkFlds1.png";
import WrkFlds2 from "../assets/img/WrkFlds2.png";
import WrkFlds3 from "../assets/img/WrkFlds3.png";
import WrkFlds4 from "../assets/img/WrkFlds4.png";
import Developer from "../assets/img/Developer.png";
import Client from "../assets/img/Client.jpg";

const Home = ({ classes }) => {
  const developers = [
    {
      img: Developer,
      name: "Ali Omar1",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      img: Developer,
      name: "Ali Omar2",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      img: Developer,
      name: "Ali Omar3",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      img: Developer,
      name: "Ali Omar4",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      img: Developer,
      name: "Ali Omar5",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      img: Developer,
      name: "Ali Omar6",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      img: Developer,
      name: "Ali Omar7",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      img: Developer,
      name: "Ali Omar8",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      img: Developer,
      name: "Ali Omar9",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
  ];
  const clients = [
    {
      img: Client,
      name: "Tom1",
      messageHeader: "It was a very good experience1",
      messageContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu",
    },
    {
      img: Client,
      name: "Tom2",
      messageHeader: "It was a very good experience2",
      messageContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu",
    },
    {
      img: Client,
      name: "Tom3",
      messageHeader: "It was a very good experience3",
      messageContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu",
    },
    {
      img: Client,
      name: "Tom4",
      messageHeader: "It was a very good experience4",
      messageContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu",
    },
    {
      img: Client,
      name: "Tom5",
      messageHeader: "It was a very good experience5",
      messageContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu",
    },
  ];
  return (
    <Box className={classes.home} component="main">
      <Box
        sx={{
          backgroundImage: `url(${HomeBGI})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundAttachment: "fixed",
        }}
        className="intro"
      >
        <Box className="text">
          <Typography variant="h3" gutterBottom>
            Hire the best Employee and team for your project, startup, and
            company.
          </Typography>
          <Typography variant="body2" gutterBottom>
            You can choose the best option for you, and it does not matter
            whether you are in Prague or San Francisco. We will provide you with
            all the feature to work with the employee remotly
          </Typography>
          <Link to="/contact-us">
            <Button variant="contained">Hire Now</Button>
          </Link>
        </Box>
      </Box>

      <Box className="home_main">
        <Container maxWidth="xl" className="container">
          <Box className="wrkFlds">
            <Typography variant="h3">Work fields</Typography>
            <Grid container spacing={2} className="grid">
              <Grid item xs={12} md={6} className="grid_item">
                <Paper
                  sx={{
                    backgroundImage: `url(${WrkFlds1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                  className="paper first"
                >
                  <Box className="text">
                    <Typography variant="h2" gutterBottom>
                      Mobile Development
                    </Typography>
                    <Link to="/developers">
                      <Button variant="outlined">Explore the freelancer</Button>
                    </Link>
                  </Box>
                </Paper>
                <Paper className="paper last">
                  <Grid container>
                    <Grid item xs={8} className="left" />
                    <Grid item xs={6} className="right">
                      <Box className="text">
                        <Typography variant="h2" gutterBottom>
                          Project Management
                        </Typography>
                        <Link to="/developers">
                          <Button variant="outlined" size="small">
                            Explore the freelancer
                          </Button>
                        </Link>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        backgroundImage: `url(${WrkFlds2})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                      }}
                      className="grid_item"
                    />
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} className="grid_item">
                <Paper
                  sx={{
                    backgroundImage: `url(${WrkFlds3})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                  className="paper first"
                >
                  <Box className="text">
                    <Typography variant="h2" gutterBottom>
                      Web Development
                    </Typography>
                    <Link to="/developers">
                      <Button variant="outlined">Explore the freelancer</Button>
                    </Link>
                  </Box>
                </Paper>
                <Link to="/wrk-flds">
                  <Paper
                    sx={{
                      backgroundImage: `url(${WrkFlds4})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center bottom",
                    }}
                    className="paper last"
                  >
                    <Box className="text">
                      <Typography variant="h2">See All Fields</Typography>
                    </Box>
                  </Paper>
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Box className="developers">
            <Typography variant="h3">Outstanding Workers</Typography>

            <TrendyolCarousel
              className="carousel"
              show={4}
              slide={2}
              transition={0.5}
              swiping={true}
              rightArrow={
                <IconButton
                  size="small"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "flex",
                    },
                  }}
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              }
              leftArrow={
                <IconButton
                  size="large"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "flex",
                    },
                  }}
                >
                  <ArrowBackIosOutlinedIcon fontSize="small" />
                </IconButton>
              }
            >
              {developers.map((developer, i) => (
                <Card className="card" key={i}>
                  <CardMedia
                    component="img"
                    image={developer.img}
                    alt="A developer"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {developer.name}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {developer.bio}
                    </Typography>
                    <Button variant="contained">Download CV</Button>
                  </CardContent>
                </Card>
              ))}
            </TrendyolCarousel>
          </Box>
          <Box className="clients">
            <Container maxWidth="md">
              <Typography variant="h3">
                Here is what our Clients are saying About us
              </Typography>

              <ResponsiveCarousel
                showArrows={true}
                autoPlay={false}
                showThumbs={false}
                showIndicators={true}
                showStatus={false}
                swipeable={true}
                infiniteLoop={true}
                className="carousel"
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                  const imgDefStyle = {
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.5s ease",
                  };
                  const textDefStyle = {
                    color: "#0D0E43",
                    transition: "all 0.5s ease",
                    fontSize: "0px",
                    fontWeight: "bold",
                  };
                  const imgStyle = isSelected
                    ? {
                        ...imgDefStyle,
                        width: "110px",
                        height: "110px",
                        marginBottom: "8px",
                      }
                    : { ...imgDefStyle };

                  const textStyle = isSelected
                    ? {
                        ...textDefStyle,
                        fontSize: "18px",
                      }
                    : { ...textDefStyle };

                  return (
                    <Box
                      sx={{
                        marginLeft: "20px",
                      }}
                    >
                      <Box
                        sx={imgStyle}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                        className="indicator"
                      >
                        <img
                          src={clients[index].img}
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                      </Box>
                      <Typography variant="h6" sx={textStyle}>
                        {clients[index].name}
                      </Typography>
                    </Box>
                  );
                }}
              >
                {clients.map((client, i) => (
                  <Paper elevation={3} className="paper" key={i}>
                    <Typography variant="h5">{client.messageHeader}</Typography>
                    <Typography variant="body1">
                      {client.messageContent}
                    </Typography>
                  </Paper>
                ))}
              </ResponsiveCarousel>
            </Container>
          </Box>
        </Container>
      </Box>

      <Box className="newsletter">
        <Container maxWidth="sm">
          <Box>
            <Typography component="h1">Newsletter</Typography>
            <Typography component="h3">
              Get timely updates from your favorite products.
            </Typography>

            <Box component="form">
              <TextField
                name="email"
                id="email"
                label="Your email"
                autoComplete="email"
                required
                fullWidth
              />
              <Button variant="contained">
                <SendIcon />
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
