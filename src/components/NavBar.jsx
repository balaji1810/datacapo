import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
   Box,
   AppBar,
   Toolbar,
   Button,
   IconButton,
   Divider,
   MenuItem,
   Drawer,
} from "@mui/material";
import { Menu, CloseRounded } from "@mui/icons-material";
import Logo from "./Logo";
import ThemeIconDropdown from "../theme/ThemeIconDropdown";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   justifyContent: "space-between",
   flexShrink: 0,
   border: "1px solid",
   borderColor: theme.palette.divider,
   backgroundColor: theme.palette.background.default,
   color: theme.palette.text.primary,
   boxShadow: theme.shadows,
   padding: "8px 12px",
}));

export default function Navbar() {
   const [open, setOpen] = useState(false);

   return (
      <AppBar position='fixed'>
         <StyledToolbar>
            <Box
               sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  px: 0,
               }}
            >
               <Logo marginRight />
               <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <Button variant='text' size='small' href='#catpedia'>
                     CatPedia
                  </Button>
                  <Button variant='text' size='small' href='#blog'>
                     Cat Blogs
                  </Button>
                  <Button variant='text' size='small' href='#contact'>
                     NewsLetter
                  </Button>
               </Box>
            </Box>
            <Box
               sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 1,
                  alignItems: "center",
               }}
            >
               <Button color='primary' variant='text' size='small'>
                  Sign in
               </Button>
               <Button color='primary' variant='contained' size='small'>
                  Sign up
               </Button>
               <ThemeIconDropdown />
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
               <ThemeIconDropdown size='medium' />
               <IconButton
                  aria-label='Menu button'
                  onClick={() => setOpen(true)}
               >
                  <Menu />
               </IconButton>
               <Drawer anchor='top' open={open} onClose={() => setOpen(false)}>
                  <Box sx={{ p: 2 }}>
                     <Box
                        sx={{
                           display: "flex",
                           justifyContent: "flex-end",
                        }}
                     >
                        <IconButton onClick={() => setOpen(false)}>
                           <CloseRounded />
                        </IconButton>
                     </Box>
                     <MenuItem component='a' href='#catpedia'>
                        CatPedia
                     </MenuItem>
                     <MenuItem component='a' href='#blog'>
                        Cat Blogs
                     </MenuItem>
                     <MenuItem component='a' href='#contact'>
                        NewsLetter
                     </MenuItem>
                     <Divider sx={{ my: 3 }} />
                     <MenuItem>
                        <Button color='primary' variant='contained' fullWidth>
                           Sign up
                        </Button>
                     </MenuItem>
                     <MenuItem>
                        <Button color='primary' variant='outlined' fullWidth>
                           Sign in
                        </Button>
                     </MenuItem>
                  </Box>
               </Drawer>
            </Box>
         </StyledToolbar>
      </AppBar>
   );
}
