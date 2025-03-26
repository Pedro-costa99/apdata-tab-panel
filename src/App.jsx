import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TabContainer from "./components/TabContainer";

const theme = createTheme({
  typography: {
    // Aqui eu defini a fonte padrão para o app, conforme design do Figma.
    fontFamily: '"Open Sans", sans-serif',
  },
});

const router = createBrowserRouter([
  {
    path: "/apdata-tab-panel/",
    element: <TabContainer />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
