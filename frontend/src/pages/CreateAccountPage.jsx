import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  InputRightElement,
  InputGroup,
  useColorModeValue,
  useToast,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useUserStore } from "../store/user";
import { useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const toast = useToast();

  const { createUser } = useUserStore();

  const handleAddUser = async () => {
    const { success, message } = await createUser(newUser);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewUser({ name: "", email: "", password: "", role: "" });
    navigate("/");
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          SignUp
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Select
              placeholder="Select Role"
              name="role"
              value={newUser.role}
              onChange={(e) =>
                setNewUser({ ...newUser, role: e.target.value })
              }
            >
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </Select>
            <Input
              placeholder="Fullname"
              name="name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <Input
              placeholder="Email"
              name="email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                name="password"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button colorScheme="blue" onClick={handleAddUser} w="full">
              Register
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};
export default CreateAccountPage;
