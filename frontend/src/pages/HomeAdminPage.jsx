import {
  Container,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useUserStore } from "../store/user";
import { useLoginStore } from "../store/login";
import { useNavigate } from "react-router-dom";

const HomeAdminPage = () => {
  const token = localStorage.getItem("token");
  const { user, decodeToken } = useLoginStore();
  const { fetchUsers, users } = useUserStore();

  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      try {
        await fetchUsers(token);
        await decodeToken(token);
      } catch (error) {
        console.log(error);
      }
    };
    if (token) {
      getUsers();
    } else navigate("/");
  }, [fetchUsers, token, users, user, navigate]);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text>Welcome {user && user.user ? user.user.name : 'Guest'}</Text>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          Current Users
        </Text>
        <Table striped bordered hover responsive>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.length > 0 ? (
              users.map((user) => {
                return (
                  <Tr key={user._id}>
                    <Td>{user.name}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.role}</Td>
                  </Tr>
                );
              })
            ) : (
              <Tr>
                <Td colSpan="2">No users found</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};
export default HomeAdminPage;
