import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { buttonCustomizations } from "./buttonCustomization";
import { CssBaseline } from "@mui/material";

function AppTheme(props) {
   const { children, disableCustomTheme, themeComponents } = props;
   const theme = React.useMemo(() => {
      return disableCustomTheme
         ? {}
         : createTheme({
              colorSchemes: {
                 light: true,
                 dark: true,
              },
              components: {
                 ...buttonCustomizations,
              },
           });
   }, [disableCustomTheme, themeComponents]);
   if (disableCustomTheme) {
      return <React.Fragment>{children}</React.Fragment>;
   }
   return (
      <ThemeProvider theme={theme} disableTransitionOnChange>
         <CssBaseline enableColorScheme />
         {children}
      </ThemeProvider>
   );
}

export default AppTheme;
