import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/user";


const LoginPage = () => {
  const navigate = useNavigate();

  const [getUserData, setUserData] = useState({
    email: "",
    password: "",
  });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserData({
  //     ...getUserData,
  //     [name]: value
  //   })
  // }

  const { fetchUserById } = useUserStore();
  // const handleLogin = async (uid) => {
  //   const { success, message } = await fetchUserById(uid);
  //   if (!success) {
  //     toast({
  //       title: "Error",
  //       description: message,
  //       status: "error",
  //       isClosable: true,
  //     });
  //     navigate("/login");
  //   } else {
  //     toast({
  //       title: "Success",
  //       description: message,
  //       status: "success",
  //       isClosable: true,
  //     });
  //     navigate("/homeAdmin");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(getUserData)
      })
      const result = await res.json();
      console.log(result);
      navigate("/homeAdmin");
    } catch (error) {
      console.log(error);
    } finally {
      setUserData({
        email: "",
        name: "",
        password: ""
      })
    }


  }
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
          rounded={"lg"} S
          shadow={"md"}
        >
          <VStack spacing={4} >
            <Input placeholder="email" name="email" value={getUserData.email}
              onChange={(e) => setUserData({ ...getUserData, email: e.target.value })} />
            <Input placeholder="password" name="price" type="password" value={getUserData.password}
              onChange={(e) => setUserData({ ...getUserData, password: e.target.value })} />
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
