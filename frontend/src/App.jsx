import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import CreateAccountPage from "./pages/CreateAccountPage";
import HomeAdminPage from "./pages/HomeAdminPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homeAdmin" element={<HomeAdminPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/createAccount" element={<CreateAccountPage />} />
      </Routes>
    </Box>
  );
}

export default App;
