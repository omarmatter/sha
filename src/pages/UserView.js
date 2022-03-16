import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import WorkFields from "../components/WorkFields";
import Developers from "../components/Developers";
import DeveloperDetails from "../components/DeveloperDetails";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import SavedDevelopers from "../components/SavedDevelopers";
import useStyles from "../components/Styles";

const UserView = () => {
  const classes = useStyles();
  return (
    <div>
      <Router>
        {/* <Navbar classes={classes} /> */}
        <Routes>
          <Route
            path="/saved-developers"
            element={<SavedDevelopers classes={classes} />}
          />
          <Route path="/contact-us" element={<ContactUs classes={classes} />} />
          <Route path="/about" element={<About classes={classes} />} />
          <Route
            path="/dlper-dtls"
            element={<DeveloperDetails classes={classes} />}
          />
          <Route
            path="/developers"
            element={<Developers classes={classes} />}
          />
          <Route path="/wrk-flds" element={<WorkFields classes={classes} />} />
          <Route path="/" element={<Home classes={classes} />} />
        </Routes>

        <Footer classes={classes} />
      </Router>
    </div>
  );
};

export default UserView;
