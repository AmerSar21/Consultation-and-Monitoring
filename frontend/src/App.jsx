import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import CreateAccountPage from "./pages/CreateAccountPage";
import HomeAdminPage from "./pages/HomeAdminPage";
import HomeChairmanPage from "./pages/HomeChairmanPage";
import HomeSecretaryPage from "./pages/HomeSecretaryPage";
import HomeStudentPage from "./pages/HomeStudentPage";
import HomeTeacherPage from "./pages/HomeTeacherPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      {token ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homeAdmin" element={<HomeAdminPage />} />
        <Route path="/homeChairman" element={<HomeChairmanPage />} />
        <Route path="/homeSecretary" element={<HomeSecretaryPage />} />
        <Route path="/homeStudent" element={<HomeStudentPage />} />
        <Route path="/homeTeacher" element={<HomeTeacherPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/createAccount" element={<CreateAccountPage />} />
      </Routes>
    </Box>
  );
}

export default App;
