import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Prop {
  platforms: Platform[];
}

function PlatformIcon({ platforms }: Prop) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendoswitch,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    Web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack paddingBottom={2}>
      {platforms.map(({ slug }) => (
        <Icon key={slug} as={iconMap[slug]} color="gray.500"></Icon>
      ))}
    </HStack>
  );
}

export default PlatformIcon;
