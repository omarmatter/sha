import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Grid,
  Pagination,
} from "@mui/material";
// import WrkFlds5 from "../assets/img/WrkFlds5.png";
import { getFields } from "../APICall/FieldAPI";

const WorkFields = ({ classes }) => {
  // const wrkFlds2 = [
  //   {
  //     title: "Web DEVELOPMENT",
  //     BGI: WrkFlds5,
  //   },
  //   {
  //     title: "Web DEVELOPMENT2",
  //     BGI: WrkFlds5,
  //   },
  //   {
  //     title: "Web DEVELOPMENT3",
  //     BGI: WrkFlds5,
  //   },
  //   {
  //     title: "Web DEVELOPMENT4",
  //     BGI: WrkFlds5,
  //   },
  //   {
  //     title: "Web DEVELOPMENT5",
  //     BGI: WrkFlds5,
  //   },
  //   {
  //     title: "Web DEVELOPMENT6",
  //     BGI: WrkFlds5,
  //   },
  // ];
  const [wrkFlds, setWrkFlds] = useState([]);
  const [paginationCount, setPaginationCount] = useState(0);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    getFields(pageNum).then((res) => {
      setWrkFlds(res.data.data);
      setPaginationCount(res.data.paginate.page);
    });
  }, [pageNum]);
  return (
    <Box className={classes.wrkFlds} component="main">
      <Container maxWidth="xl" className="container">
        <Grid container spacing={2}>
          {wrkFlds.map((wrkFld) => (
            <Grid item xs={12} md={6} key={wrkFld.id}>
              <Paper
                className="paper"
                sx={{
                  backgroundImage: `url(${wrkFld.image})`,
                }}
                elevation={3}
              >
                <Paper className="transLayer" elevation={0}>
                  <Box
                    className="text"
                    sx={{
                      padding: {
                        xs: "70px 0 0 20px",
                        md: "92px 0 0 46px",
                      },
                      fontSize: {
                        xs: "11px",
                        sm: "16px",
                      },
                    }}
                  >
                    <Typography variant="h2" gutterBottom>
                      {wrkFld.name}
                    </Typography>
                    <Link to="/developers">
                      <Button variant="outlined">Explore the freelancer</Button>
                    </Link>
                  </Box>
                </Paper>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={paginationCount}
          variant="outlined"
          shape="rounded"
          size="large"
          onChange={(event, value) => {
            setPageNum(value);
          }}
        />
      </Container>
    </Box>
  );
};

export default WorkFields;
