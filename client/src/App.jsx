import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import PrivateRoute from "./auth/PrivateRoute";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route element={<PrivateRoute />}>
            <Route path="/web.whatsapp.com" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <LandingPage /> */}
      {/* <Main /> */}
    </>
  );
}

export default App;
