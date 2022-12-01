import "./App.css";
import React from "react";
import { HomePage } from "./Components/HomePage";
import { Route, Switch, useHistory } from "react-router-dom";
import "./Components/HomePage.css";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SupportIcon from "@mui/icons-material/Support";
import LoginIcon from "@mui/icons-material/Login";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import HomeIcon from "@mui/icons-material/Home";

export default function App() {
  const history = useHistory();
  return (
    <div className="container-fluid">
      <div className="col-md-12">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <img
              src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
              alt="logo"
              height="auto"
              width="100"
            />
          </IconButton>

          <Button
            style={{ marginLeft: "auto" }}
            onClick={() => history.push("/")}
            color="inherit"
          >
            <span className="navBtn">
              <HomeIcon />
              Home
            </span>
          </Button>
          <Button
            sx={{ ml: 4 }}
            onClick={() => history.push("/search")}
            color="inherit"
          >
            <span className="navBtn">
              <SearchIcon />
              Search
            </span>
          </Button>
          <Badge badgeContent={"NEW"} color="error">
            <Button
              sx={{ ml: 4 }}
              onClick={() => history.push("/offers")}
              color="inherit"
            >
              <span className="navBtn">
                <LocalOfferIcon />
                Offers
              </span>
            </Button>
          </Badge>
          <Button
            sx={{ ml: 4 }}
            onClick={() => history.push("/help")}
            color="inherit"
          >
            <span className="navBtn">
              <SupportIcon />
              Help
            </span>
          </Button>
          <Button
            sx={{ ml: 4 }}
            onClick={() => history.push("/signin")}
            color="inherit"
          >
            <span className="navBtn">
              <LoginIcon />
              Sign In
            </span>
          </Button>
          <Button
            sx={{ ml: 4 }}
            onClick={() => history.push("/cart")}
            color="inherit"
          >
            <span className="navBtn">
              <AddShoppingCartIcon />
              Cart
            </span>
          </Button>
        </Toolbar>
      </div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/search">
          <h1>Search Here</h1>
        </Route>
        <Route exact path="/offers">
          <h1>Offers will be here</h1>
        </Route>
        <Route exact path="/help">
          <h1>How may i help You..?</h1>
        </Route>
        <Route exact path="/signin">
          <h1>Login for More</h1>
        </Route>
        <Route exact path="/cart">
          <h1>Your Cart here</h1>
        </Route>
        <Route path="**">
          <h1>404 Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}
