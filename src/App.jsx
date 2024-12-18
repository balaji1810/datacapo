import { Container, CssBaseline } from "@mui/material";
import AppTheme from "./theme/AppTheme";
import NavBar from "./components/NavBar";
import Catpedia from "./components/Catpedia";
import CatBlog from "./components/CatBlog";
import Footer from "./components/Footer";

export default function App(props) {
   return (
      <AppTheme {...props}>
         <NavBar />
         <Container
            maxWidth='lg'
            component='main'
            sx={{ display: "flex", flexDirection: "column", my: 15, gap: 3 }}
         >
            <Catpedia />
            <CatBlog />
         </Container>
         <Footer />
      </AppTheme>
   );
}
