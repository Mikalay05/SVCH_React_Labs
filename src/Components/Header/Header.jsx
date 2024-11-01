import React, { useState } from "react";

import "./Header.css";

//Material UI
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import NavSection from "../NavSection/NavSection";
import InformationLinksSection from "../InformationLinksSection/InformationLinksSection";
import BM from "../BM/BM";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          MaterialUI
        </Typography>

        <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <BM open={drawerOpen} onClose={toggleDrawer}>
        <NavSection flexDirection='c'/>
        <p>я гей</p>
        <p>я гей</p>
        <p>я гей</p>
        <p>я гей</p>

      </BM>
    </AppBar>
  );
}
