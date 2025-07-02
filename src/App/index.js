import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import Login from "../components/Login";
import Register from "../components/Register";
import Checkout from "../components/Checkout"
import Postcheck from "../components/Checkout/Postcheck"
import Home from "../components/Home"
import Theme from "../theme"
import GlobalStyles from "../theme/GlobalStyles"

const App=()=> {
  return (
    <ThemeProvider theme={Theme}>
    <GlobalStyles />
      
        <Routes>
            <Route
            path="/"
            element={<Login/>}
            />
            <Route
            path="/register"
            element={<Register/>}
            />
            <Route
            path="/store"
            element={
            <>
            <Header/>
            <Home/>
            </>
            }
            />
            <Route
            path="/checkout"
            element={<Checkout/>}
            />
            <Route
            path="/succes"
            element={<Postcheck/>}
            />


    
            
        </Routes>
    </ThemeProvider>
  );
}

export default App;
