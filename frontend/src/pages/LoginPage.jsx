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
import { setFips } from "crypto";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const handleInputChange = () => {
  //   const { name, value } = event.target;
  //   setFormData({
      
  //   })
  // }



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
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input placeholder="Username" name="name" />
            <Input placeholder="Password" name="price" type="number" />
            <Button colorScheme="blue" w="full">
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
