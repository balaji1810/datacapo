import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   Box,
   Card,
   CardContent,
   CardMedia,
   Chip,
   Grid2,
   Typography,
} from "@mui/material";
import { changeCountryFilter, loadCats } from "../redux/actions";
import CardLoader from "./CardLoader";

export default function Catpedia() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(loadCats());
   }, [dispatch]);

   const handleClick = (event) => {
      dispatch(changeCountryFilter(event.target.innerText));
   };

   const {
      catDetailsFiltered,
      catLoading,
      highlightCountryFilter,
      originCountries,
   } = useSelector((state) => state.catCategories);

   return (
      <Box
         sx={{ display: "flex", flexDirection: "column", gap: 4 }}
         id='catpedia'
      >
         <div>
            <Typography variant='h2'>CatPedia</Typography>
            <Typography>
               Get information about cats from all over the world
            </Typography>
         </div>
         <Box
            sx={{
               display: "flex",
               width: "100%",
               justifyContent: "space-between",
               gap: 3,
               overflow: "auto",
            }}
         >
            <Chip
               onClick={handleClick}
               size='medium'
               label='All Countries'
               variant={
                  highlightCountryFilter !== "All Countries"
                     ? "outlined"
                     : undefined
               }
            />
            {originCountries.map((country, index) => (
               <Chip
                  onClick={handleClick}
                  size='medium'
                  label={country}
                  variant={
                     highlightCountryFilter !== country ? "outlined" : undefined
                  }
                  key={index}
               />
            ))}
         </Box>
         <Grid2 container spacing={2} columns={12}>
            {catLoading ? (
               <>
                  <CardLoader />
                  <CardLoader />
                  <CardLoader />
               </>
            ) : (
               catDetailsFiltered.slice(0, 12).map((catData, index) => (
                  <Grid2 size={{ xs: 12, md: 4 }} key={index}>
                     <Card
                        variant='outlined'
                        sx={{
                           height: "100%",
                           display: "flex",
                           flexDirection: "column",
                           padding: 0,
                        }}
                     >
                        <CardMedia
                           component='img'
                           alt='cat'
                           image={catData.url}
                           sx={{
                              height: { sm: "auto", md: "50%" },
                              aspectRatio: { sm: "16 / 9", md: "" },
                           }}
                        />
                        <CardContent>
                           <Typography
                              gutterBottom
                              variant='caption'
                              component='div'
                           >
                              {catData.name}
                           </Typography>
                           <Typography
                              gutterBottom
                              variant='h6'
                              component='div'
                           >
                              {catData.origin}
                           </Typography>
                           <Typography
                              variant='body2'
                              color='text.secondary'
                              gutterBottom
                           >
                              {catData.description}
                           </Typography>
                        </CardContent>
                        <Box
                           sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: 2,
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "16px",
                           }}
                        >
                           <Typography variant='caption'>
                              {catData.temperament}
                           </Typography>
                           <Typography variant='caption'>
                              Life Span {catData.lifeSpan} years
                           </Typography>
                        </Box>
                     </Card>
                  </Grid2>
               ))
            )}
         </Grid2>
      </Box>
   );
}
