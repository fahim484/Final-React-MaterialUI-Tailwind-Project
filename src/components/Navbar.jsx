import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = ["About", "Services", "Projects", "Contacts"];
  return (
    <>
      <AppBar

        elevation={0}
        className="navbar"
        position="static"
        sx={{
          backgroundColor: "#FFFFFF",
          color: "black",
          borderBottom: "1px solid #F2F2F2",
          height: "78px",
        }}
      >
        <Toolbar>
          {isMobile ? (
            <div>
              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </div>
          ) : (
            <>
              <Typography sx={{ flexGrow: 1 }}>
                <img src="/logo.png" alt="" style={{}} />
              </Typography>

              <div className="flex gap-[29px]">
                {menuItems.map((item) => (
                  <Button color="inherit" key={item}>
                    {item}
                  </Button>
                ))}
                
                <Button
                  variant="outlined"
                  sx={{
                    color: "#2AB691",
                    fontWeight: "600",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    "&:hover": { backgroundColor: "#2AB6966A", color: "white" },
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item} onClick={() => setOpen(false)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}

          <ListItem button onClick={() => setOpen(false)}>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;

