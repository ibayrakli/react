import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";

export const LessonBottomNavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      onChange={(event, newValue) => setValue(newValue)}
    >
      <BottomNavigationAction icon={<RestoreIcon />} label="Recents" />
      <BottomNavigationAction icon={<FavoriteIcon />} label="Favorites" />
      <BottomNavigationAction icon={<LocationOnIcon />} label="Nearby" />
    </BottomNavigation>
  );
};
