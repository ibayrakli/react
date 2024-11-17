import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

import AppsIcon from "@mui/icons-material/Apps";
import { useState } from "react";

export const LessonAppBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openControl = Boolean(anchorEl);

  console.log(openControl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ marginRight: "auto" }}>
          Header Sample
        </Typography>
        <Stack direction="row">
          <Button sx={{ color: "white" }}>Home</Button>
          <Button sx={{ color: "white" }}>About Us</Button>
          <Button sx={{ color: "white" }}>Products</Button>
          <Button sx={{ color: "white" }}>Prices</Button>
          <Button sx={{ color: "white" }} onClick={handleClick}>
            Discounts
          </Button>
        </Stack>
        <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Books</MenuItem>
          <MenuItem onClick={handleClose}>Notebooks</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
