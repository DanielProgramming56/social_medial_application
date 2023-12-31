import Login from "page/login/login";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "page/home/home";
import Profile from "page/profile/profile";

  function App() {
    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
    const isAuth = Boolean(useSelector((state) => state.token));
    return (
      <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<Login />} /> 
              <Route
              path="/home"
              element={isAuth ? <Home /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <Profile /> : <Navigate to="/" />}
            />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    );
  }

export default App;
