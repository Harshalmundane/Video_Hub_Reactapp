import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

  const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      marginLeft="2"
      top={"4"}
      right={'4'}
      zIndex={'overlay'}
      pos={'fixed'}
      onClick={toggleColorMode}
      icon={<SwitchIcon/>}
      {...props}
    />
  );
};
 export default ColorModeSwitcher;