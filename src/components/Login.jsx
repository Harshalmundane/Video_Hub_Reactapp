import { Button, Container, HStack, Input,Heading,Link,Text,from, VStack } from '@chakra-ui/react';
import React from 'react'

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={'100vh'} p={'16'}>
          <form>
            <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full',"96"]}
            m="auto"
            my='16'>
                <Heading alignItems={'center'}>Welcome Back</Heading>
                <Input  placeholder='Email' type={'email'} required focusBorderColor='purple.500'></Input>
                <Input  placeholder='Password' type={'password'} required focusBorderColor='purple.500'></Input>

                <Button variant={'link'} alignSelf={'flex-end'}>
                  <Link to={'/forgetpassword'}>Froget Password</Link>
                </Button>

                <Button colorScheme='purple' type={'submit'} >Log IN</Button>

                <Text textAlign={'right'}>New User?{''}
                <Button variant={'link'} colorScheme='purple'>
                  <Link to={'/signup'} > Sign Up </Link>
                </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Login