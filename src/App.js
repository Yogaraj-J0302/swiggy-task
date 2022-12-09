import "./App.css";
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
import HomeIcon from "@mui/icons-material/Home";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const history = useHistory();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navItems = [
    {
      item: (
        <span className="navBtn">
          <HomeIcon /> Home
        </span>
      ),
      event: () => history.push("/"),
    },
    {
      item: (
        <span className="navBtn">
          <SearchIcon /> Search
        </span>
      ),
      event: () => history.push("/search"),
    },
    {
      item: (
        <span className="navBtn">
          <LocalOfferIcon /> Offers
        </span>
      ),
      event: () => history.push("/offers"),
    },
    {
      item: (
        <span className="navBtn">
          <SupportIcon /> Help
        </span>
      ),
      event: () => history.push("/help"),
    },
    {
      item: (
        <span className="navBtn">
          <LoginIcon /> Sign In
        </span>
      ),
      event: () => history.push("/signin"),
    },
    {
      item: (
        <span className="navBtn">
          <AddShoppingCartIcon /> Cart
        </span>
      ),
      event: () => history.push("/cart"),
    },
  ];
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        backgroundColor: "#cc6317",
        textAlign: "center",
        minHeight: "100%",
      }}
    >
      <Typography variant="h5" color="primary" sx={{ my: 2, color: "#fff" }}>
        Swiggy.com
      </Typography>
      <Divider />
      <List>
        {navItems.map((e) => (
          <ListItem key={e.item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Button key={e.item} onClick={e.event} sx={{ color: "#fff" }}>
                {e.item}
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div className="container-fluid">
      <div className="navBar">
        <Box sx={{ display: "flex" }}>
          <AppBar
            className="appBar"
            sx={{ backgroundColor: "#000" }}
            component="nav"
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
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
              <Box
                sx={{
                  marginLeft: "auto",
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                {navItems.map((e) => (
                  <Button
                    key={e.item}
                    onClick={e.event}
                    sx={{ color: "#fff", ml: 3 }}
                  >
                    {e.item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "block", md: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
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
