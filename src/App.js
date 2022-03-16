import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import useStyles from "./components/Styles";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import UserView from "./pages/UserView";

function App() {
  const activePage = useSelector((state) => state.activePage);
  const classes = useStyles();
  return (
    <div className={`App ${classes.app}`}>
      <CssBaseline />
      {activePage === "login" && <Login />}
      {activePage === "registration" && <Registration />}
      {activePage === "userView" && <UserView />}
    </div>
  );
}

export default App;
