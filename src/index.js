import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   // <React.StrictMode>
   <Provider store={store}>
      <StyledEngineProvider injectFirst>
         <App />
      </StyledEngineProvider>
   </Provider>
   // </React.StrictMode>
);
