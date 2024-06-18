import React, { useState } from 'react';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, VStack, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Button
        position="fixed"
        top="4"
        left="4"
        colorScheme="purple"
        p="0"
        zIndex={'overlay'}
        w="10"
        h="10"
        onClick={() => setIsOpen(true)}
      >
        <BiMenuAltLeft size="20" />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
              <Link to="/">Home</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
              <Link to="/videos">videos</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
              <Link to="/videos?category=free">Free Video</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
              <Link to="/upload">Upload Video</Link>
              </Button>
            </VStack>
            {/* Add more links as needed */}
            <HStack position={"absolute"} bottom={"10"} left={"0"} width={"full"} justifyContent={"space-evenly"}>
              <Button colorScheme={'purple'}>
                 <Link to={"/login"}> Log In</Link>
              </Button>

              <Button colorScheme={'purple'} variant={"outline"}>
                 <Link  to={"/signup"}> Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
