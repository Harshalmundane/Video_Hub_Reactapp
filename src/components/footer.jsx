import { Box, Stack, VStack, Text, Heading, Button, HStack, Input } from "@chakra-ui/react";
import { AiOutlineSend } from 'react-icons/ai'; // Import the icon from react-icons
import React from 'react';

function Footer() {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={'white'}>
      <Stack direction={["column", 'row']} spacing={4}>
        <VStack alignItems="stretch" w={'full'} px={'4'}>
          <Heading size="md" textTransform={"uppercase"} textAlign={'center'}>
            Subscribe to get updates
          </Heading>
          <HStack
          borderBottom={"2px solid  white"} p={'2'}>
            <Input 
              placeholder="Enter your email" 
              variant="filled" 
              border={'none'}
              outline={'none'}
              color="black"
              borderRadius={'20px 0 0 20px'}
            />
            <Button 
              p={"0"}
              colorScheme={'purple'}
              variant={"solid"}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
          <Heading textTransform={'uppercase'} textAlign={'center'}>
          VIDEO HUB
          </Heading>
          <Text>All right Received</Text>
        </VStack>

        <VStack w={'full'}>
              <Heading size={"md"} textTransform={'uppercase'}>
                Social Media
              </Heading>
              <Button  variant={"link"} colorScheme="White">
                <a target="black" href="https://youtube.com/6packprogrammer">Youtube</a>
              </Button>

              <Button  variant={"link"} colorScheme="White">
                <a target="black" href="https://youtube.com/6packprogrammer">Instagram</a>
              </Button>

              <Button  variant={"link"} colorScheme="White">
                <a target="black" href="https://youtube.com/6packprogrammer">Github</a>
              </Button>
          </VStack>
      </Stack>
    </Box>
  )
}

export default Footer;
