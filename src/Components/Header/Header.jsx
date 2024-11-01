import React, { useState } from "react";

import "./Header.css";

//Material UI
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import NavSection from "../NavSection/NavSection";
import InformationLinksSection from "../InformationLinksSection/InformationLinksSection";
import BM from "../BM/BM";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const [dialogOpen, setDialogOpen] = useState(false);
  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 0,
        }}
      >
        <Typography variant="h6" style={{ flexGrow: 1 }} onClick={toggleDialog}>
          MaterialUI
        </Typography>

        <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <BM open={drawerOpen} onClose={toggleDrawer}>
        <NavSection flexDirection="c" />
      </BM>

      <Dialog open={dialogOpen} onClose={toggleDialog}>
        <DialogTitle>
          <Typography variant="h3">Material UI components</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography>Created by Nikolay</Typography>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={toggleDialog}>
            <CloseIcon/>
          </IconButton>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}
