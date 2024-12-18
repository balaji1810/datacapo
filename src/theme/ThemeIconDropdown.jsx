import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkModeRounded";
import LightModeIcon from "@mui/icons-material/LightModeRounded";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

export default function ColorModeIconDropdown(props) {
   const { mode, systemMode, setMode } = useColorScheme();
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   const handleMode = (targetMode) => () => {
      setMode(targetMode);
      handleClose();
   };
   const resolvedMode = systemMode || mode || "dark";
   const icon = {
      light: <LightModeIcon />,
      dark: <DarkModeIcon />,
   }[resolvedMode];
   return (
      <>
         <IconButton
            onClick={handleClick}
            disableRipple
            size='small'
            {...props}
         >
            {icon}
         </IconButton>
         <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
         >
            <MenuItem
               selected={mode === "system"}
               onClick={handleMode("system")}
            >
               System
            </MenuItem>
            <MenuItem selected={mode === "light"} onClick={handleMode("light")}>
               Light
            </MenuItem>
            <MenuItem selected={mode === "dark"} onClick={handleMode("dark")}>
               Dark
            </MenuItem>
         </Menu>
      </>
   );
}
