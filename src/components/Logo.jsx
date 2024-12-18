import { Box } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

export default function Logo({ marginRight }) {
   return (
      <Box
         variant="logo"
         sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mr: marginRight ? 2 : 0,
         }}
      >
         <PetsIcon />Cats.com
      </Box>
   );
}
