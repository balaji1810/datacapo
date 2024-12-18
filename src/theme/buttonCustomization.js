const gray = {
   50: "#f5f6fa",
   100: "#ebeef4",
   200: "#dadee7",
   300: "#c2c9d6",
   400: "#94a0b8",
   500: "#566481",
   600: "#47536b",
   700: "#333b4d",
   800: "#0b0e14",
   900: "#05070a",
};

export const buttonCustomizations = {
   MuiButton: {
      styleOverrides: {
         root: ({ theme }) => ({
            textTransform: "none",
            variants: [
               {
                  props: {
                     size: "small",
                  },
                  style: {
                     height: "2.25rem",
                     padding: "8px 12px",
                  },
               },
               {
                  props: {
                     color: "primary",
                     variant: "contained",
                  },
                  style: {
                     color: "white",
                     backgroundColor: gray[900],
                     "&:hover": {
                        backgroundColor: gray[700],
                     },
                     "&:active": {
                        backgroundColor: gray[800],
                     },
                     ...theme.applyStyles("dark", {
                        color: "black",
                        backgroundColor: gray[50],
                        "&:hover": {
                           backgroundColor: gray[300],
                        },
                        "&:active": {
                           backgroundColor: gray[400],
                        },
                     }),
                  },
               },
               {
                  props: {
                     color: "primary",
                     variant: "outlined",
                  },
                  style: {
                     color: (theme.vars || theme).palette.text.primary,
                     border: "1px solid",
                     borderColor: gray[200],
                     backgroundColor: gray[50],
                     "&:hover": {
                        backgroundColor: gray[100],
                        borderColor: gray[300],
                     },
                     "&:active": {
                        backgroundColor: gray[200],
                     },
                     ...theme.applyStyles("dark", {
                        backgroundColor: gray[800],
                        borderColor: gray[700],
                        "&:hover": {
                           backgroundColor: gray[900],
                           borderColor: gray[600],
                        },
                        "&:active": {
                           backgroundColor: gray[900],
                        },
                     }),
                  },
               },
               {
                  props: {
                     variant: "text",
                  },
                  style: {
                     color: gray[600],
                     "&:hover": {
                        backgroundColor: gray[100],
                     },
                     "&:active": {
                        backgroundColor: gray[200],
                     },
                     ...theme.applyStyles("dark", {
                        color: gray[50],
                        "&:hover": {
                           backgroundColor: gray[700],
                        },
                        "&:active": {
                           backgroundColor: gray[900],
                        },
                     }),
                  },
               },
            ],
         }),
      },
   }
};
