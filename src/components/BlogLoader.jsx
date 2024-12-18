import { Grid2, Box, Skeleton } from "@mui/material";

export default function BlogLoader() {
   return (
      <Grid2 size={{ xs: 12, sm: 6 }}>
         <Skeleton variant='rectangular' width='100%' height={100} />
         <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width='60%' />
         </Box>
      </Grid2>
   );
}
