import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid2, Pagination, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { loadCatBlogs, paginateCatBlog } from "../redux/actions";
import BlogLoader from "./BlogLoader";

const TitleTypography = styled(Typography)(({ theme }) => ({
   position: "relative",
   textDecoration: "none",
   "&:hover": { cursor: "pointer" },
   "& .arrow": {
      visibility: "hidden",
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
   },
   "&:hover .arrow": {
      visibility: "visible",
      opacity: 0.7,
   },
   "&::before": {
      content: '""',
      position: "absolute",
      width: 0,
      height: "1px",
      bottom: 0,
      left: 0,
      backgroundColor: theme.palette.text.primary,
      opacity: 0.3,
      transition: "width 0.3s ease, opacity 0.3s ease",
   },
   "&:hover::before": {
      width: "100%",
   },
}));

export default function CatBlog() {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(loadCatBlogs());
   }, [dispatch]);

   const { catBlogData, catBlogLoading } = useSelector(
      (state) => state.catBlogs
   );

   return (
      <div id='blog'>
         <Typography variant='h3' gutterBottom>
            More Blogs on Cats
         </Typography>
         <Grid2 container spacing={8} columns={12} sx={{ my: 4 }}>
            {catBlogLoading ? (
               <>
                  <BlogLoader />
                  <BlogLoader />
               </>
            ) : (
               catBlogData.map((blog, index) => (
                  <Grid2 size={{ xs: 12, sm: 6 }} key={index}>
                     <Box
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                           justifyContent: "space-between",
                           gap: 1,
                           height: "100%",
                        }}
                     >
                        <Typography
                           gutterBottom
                           variant='caption'
                           component='div'
                        >
                           username : {blog.tag}
                        </Typography>
                        <TitleTypography gutterBottom variant='h6'>
                           {blog.title}
                           <NavigateNextRoundedIcon
                              className='arrow'
                              sx={{ fontSize: "1rem" }}
                           />
                        </TitleTypography>
                        <Typography
                           variant='body2'
                           color='text.secondary'
                           gutterBottom
                        >
                           {blog.description}
                        </Typography>
                        <Box
                           sx={{
                              display: "flex",
                              flexDirection: "row",
                              gap: 2,
                              alignItems: "center",
                              justifyContent: "space-between",
                           }}
                        >
                           <Typography variant='caption'>
                              {blog.name}
                           </Typography>
                           <Typography variant='caption'>
                              email : {blog.email}
                           </Typography>
                        </Box>
                     </Box>
                  </Grid2>
               ))
            )}
         </Grid2>
         <Box sx={{ display: "flex", flexDirection: "row", pt: 4 }}>
            <Pagination
               hidePrevButton
               hideNextButton
               count={10}
               boundaryCount={10}
               onChange={(_, value) => dispatch(paginateCatBlog(value))}
            />
         </Box>
      </div>
   );
}
