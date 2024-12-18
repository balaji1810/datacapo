import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { LinkedIn, GitHub } from "@mui/icons-material";
import {
   Box,
   Button,
   Container,
   Divider,
   IconButton,
   Link,
   Stack,
   TextField,
   Typography,
   Alert,
   Grid2,
   Snackbar,
} from "@mui/material";
import Logo from "./Logo";

const phoneRegExp =
   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
   fname: yup
      .string("Enter your first name")
      .required("First name is required"),
   lname: yup.string("Enter your last name").required("Last name is required"),
   age: yup
      .number("")
      .typeError("Age must be a number")
      .required("Age is required")
      .positive()
      .integer("Invalid Age"),
   phoneNumber: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone number is required"),
   email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
   address: yup.string("Enter your home address"),
});

export default function Footer() {
   const [open, setOpen] = useState(false);

   const formik = useFormik({
      initialValues: {
         email: "",
         age: "",
         fname: "",
         lname: "",
         address: "",
         phoneNumber: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values, { resetForm }) => {
         setOpen(true);
         resetForm({
            values: {
               email: "",
               age: "",
               fname: "",
               lname: "",
               address: "",
               phoneNumber: "",
            },
         });
      },
   });

   const handleClose = (event, reason) => {
      if (reason === "clickaway") {
         return;
      }
      setOpen(false);
   };

   return (
      <>
         <Divider />
         <Container
            component='div'
            id='contact'
            sx={{
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               py: { xs: 8, sm: 10 },
               textAlign: { sm: "center", md: "left" },
            }}
         >
            <Logo />
            <Typography
               variant='body2'
               gutterBottom
               sx={{ fontWeight: 600, mt: 2 }}
            >
               Join the newsletter
            </Typography>
            <Typography variant='body2' sx={{ color: "text.secondary", mb: 2 }}>
               Subscribe for daily cat updates!
            </Typography>
            <form
               onSubmit={formik.handleSubmit}
               style={{ textAlign: "center" }}
            >
               <Grid2 container spacing={2} sx={{ my: 4 }}>
                  <Grid2 size={{ xs: 12, sm: 6 }}>
                     <TextField
                        fullWidth
                        id='fname'
                        name='fname'
                        label='First Name'
                        value={formik.values.fname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                           formik.touched.fname && Boolean(formik.errors.fname)
                        }
                        helperText={formik.touched.fname && formik.errors.fname}
                        aria-label='Enter your email address'
                        placeholder='Your email address'
                     />
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6 }}>
                     <TextField
                        fullWidth
                        id='lname'
                        name='lname'
                        label='Last Name'
                        value={formik.values.lname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                           formik.touched.lname && Boolean(formik.errors.lname)
                        }
                        helperText={formik.touched.lname && formik.errors.lname}
                        aria-label='Enter your last name'
                        placeholder='Your last name'
                     />
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6 }}>
                     <TextField
                        fullWidth
                        id='age'
                        name='age'
                        label='Age'
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.age && Boolean(formik.errors.age)}
                        helperText={formik.touched.age && formik.errors.age}
                        aria-label='Enter your age'
                        placeholder='Your age'
                     />
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6 }}>
                     <TextField
                        fullWidth
                        id='phoneNumber'
                        name='phoneNumber'
                        label='Phone Number'
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                           formik.touched.phoneNumber &&
                           Boolean(formik.errors.phoneNumber)
                        }
                        helperText={
                           formik.touched.phoneNumber &&
                           formik.errors.phoneNumber
                        }
                        aria-label='Enter your phone number'
                        placeholder='Your phone number'
                     />
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6 }}>
                     <TextField
                        fullWidth
                        id='email'
                        name='email'
                        label='Email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                           formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                        aria-label='Enter your email address'
                        placeholder='Your email address'
                     />
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6 }}>
                     <TextField
                        fullWidth
                        id='address'
                        name='address'
                        label='Home Address'
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                           formik.touched.address &&
                           Boolean(formik.errors.address)
                        }
                        helperText={
                           formik.touched.address && formik.errors.address
                        }
                        aria-label='Enter your home address'
                        placeholder='Your home address'
                     />
                  </Grid2>
               </Grid2>
               <Button
                  color='primary'
                  variant='contained'
                  size='large'
                  type='submit'
                  sx={{ width: "250px" }}
               >
                  Submit
               </Button>
            </form>
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  pt: { xs: 4, sm: 8 },
                  mt: { xs: 4, sm: 8 },
                  width: "100%",
                  borderTop: "1px solid",
               }}
            >
               <div>
                  <Link color='text.secondary' variant='body2' href='#'>
                     Privacy Policy
                  </Link>
                  <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
                     &nbsp;•&nbsp;
                  </Typography>
                  <Link color='text.secondary' variant='body2' href='#'>
                     Terms of Service
                  </Link>
                  <Typography variant='body2' sx={{ color: "text.secondary" }}>
                     {"Copyright © "} {new Date().getFullYear()}
                  </Typography>
               </div>
               <Stack
                  direction='row'
                  spacing={1}
                  useFlexGap
                  sx={{ justifyContent: "left", color: "text.secondary" }}
               >
                  <IconButton
                     color='inherit'
                     size='small'
                     href='https://github.com/balaji1810'
                     aria-label='GitHub'
                     sx={{ alignSelf: "center" }}
                  >
                     <GitHub />
                  </IconButton>
                  <IconButton
                     color='inherit'
                     size='small'
                     href='https://www.linkedin.com/in/balaji-s-b-7b6165203/'
                     aria-label='LinkedIn'
                     sx={{ alignSelf: "center" }}
                  >
                     <LinkedIn />
                  </IconButton>
               </Stack>
            </Box>
         </Container>
         <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert
               onClose={handleClose}
               severity='success'
               variant='filled'
               sx={{ width: "100%" }}
            >
               You've successfully registered for our NewsLetter
            </Alert>
         </Snackbar>
      </>
   );
}
