import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useToast,
  useColorModeValue,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginStore } from "../store/login";
import { authLogin } from '../services/login.service';
import { useAuth } from "../context/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { user } = useLoginStore();
  const toast = useToast();
  const { login } = useAuth();
  // const { authLogin } = useLoginStore();
  const [getUserData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async () => {
    const { success, message, token } = await authLogin(getUserData);
    if(getUserData.email == "" || getUserData.password == "" || !success){
      toast({
        title: "Error",
        description: "Please Complete the Fields",
        status: "error",
        isClosable: true,
      });
    } else if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
      navigate("/");
    } else {
      login(token);
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
      navigate("/homeAdmin");
    }
    setUserData({
      email: "",
      name: "",
      password: "",
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token == "") {
      console.log("No token found");
    }
  }, [token, user]);

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Consultation and Monitoring
        </Heading>
        <Box
          w={"medium"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          S
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="email"
              name="email"
              value={getUserData.email}
              onChange={(e) =>
                setUserData({ ...getUserData, email: e.target.value })
              }
            />
            <Input
              placeholder="password"
              name="price"
              type="password"
              value={getUserData.password}
              onChange={(e) =>
                setUserData({ ...getUserData, password: e.target.value })
              }
            />
            <Button colorScheme="blue" w="full" onClick={handleSubmit}>
              Login
            </Button>
            <Link to="/createAccount">
              <Text fontSize="xs">Don't Have Account Yet Register Here</Text>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};
export default LoginPage;
