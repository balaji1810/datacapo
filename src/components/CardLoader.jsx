import { Grid2, Box, Skeleton } from "@mui/material";

export default function CardLoader() {
   return (
      <Grid2 size={{ xs: 12, md: 4 }}>
         <Skeleton variant='rectangular' width='100%' height={300} />
         <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width='60%' />
         </Box>
      </Grid2>
   );
}
