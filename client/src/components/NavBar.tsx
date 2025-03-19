import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="50px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
