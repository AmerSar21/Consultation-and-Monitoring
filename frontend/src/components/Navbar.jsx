import {
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  MenuGroup,
} from "@chakra-ui/react";
import { useRef } from "react";
import {
  SettingsIcon,
  ChevronRightIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { LuSun } from "react-icons/lu";
import { BsFillPersonFill, BsBoxArrowRight } from "react-icons/bs";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Menu>
          <Button
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            onClick={onOpen}
          />
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
              <DrawerBody>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Menu>
        <HStack spacing={2} alignItems={"center"}>
          <Menu>
            <MenuButton as={IconButton} aria-label="Account Name">
              Account Name
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem icon={<BsFillPersonFill />}>My Account</MenuItem>
                <MenuItem icon={<SettingsIcon />}>Account Settings</MenuItem>
              </MenuGroup>
              <MenuItem onClick={toggleColorMode}>
                {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
                {colorMode === "light" ? "  Dark Mode" : "  Light Mode"}
              </MenuItem>
              <MenuItem icon={<ChevronRightIcon />} onClick={handleLogout}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Container>
  );
};
export default Navbar;
