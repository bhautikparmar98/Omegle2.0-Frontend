import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar sx={{ background: "white" }} >
      <Toolbar>
        <Typography
          variant="h4"
          sx={{
            color:'rgba(255,131,8,255)',
            "&::first-letter": { color: "rgba(63,159,255,255)" },
          }}
        >
          Omegle2.0
        </Typography>
        <Typography color="textPrimary" variant="h6" sx={{marginLeft:"4%"}}>Talk to strangers!</Typography>
        <Typography sx={{marginLeft:'auto'}} color="textSecondary">{0}+ Online now</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;