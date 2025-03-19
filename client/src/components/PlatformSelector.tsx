import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { ParentPlatform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: ParentPlatform) => void;
  selectedPlatform: ParentPlatform | null;
}

function PlatformSelector({ selectedPlatform, onSelectPlatform }: Props) {
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform !== null ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((Platform) => (
          <MenuItem
            fontWeight={
              Platform.id === selectedPlatform?.id ? "bold" : "normal"
            }
            key={Platform.id}
            onClick={() => onSelectPlatform(Platform)}
          >
            {Platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
