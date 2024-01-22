import React from 'react';
import { NextPage } from 'next';
import {
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Center,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const Faucet: NextPage = () => {
  return (
    <Container maxW="800px" mt={10}>
      <Heading as="h1" mb={6}>
        Blast L2 Sepolia Faucet
      </Heading>
      <VStack align="start" spacing={4}>
        <Text>
          To fund your Blast L2 Sepolia testnet wallet, follow these instructions:
        </Text>
        <ol>
          <li>Join our Discord server: <Link href="https://discord.gg/Qvt7F4GeYa" target="_blank">Discord Server Link</Link></li>
          <li>Verify your account on the server to access all channels.</li>
          <li>Go to the #faucet channel.</li>
          <li>Type the following command to receive Sepolia testnet ETH:  <br></br>
            <code>/faucet blastsepolia eth &lt;your-wallet-address&gt;</code>
          </li>
        </ol>
        <Text>
          Note: Ensure that you have followed all the steps correctly for successful funding.
        </Text>
      </VStack>
      <br />
      <br />
      <br />
      <Center>
        <Button
          as={NextLink}
          href="https://discord.gg/Qvt7F4GeYa"
          target="_blank"
          variant="solid"
          colorScheme="teal"
        >
          Join the Quest
        </Button>
      </Center>
    </Container>
  );
};

export default Faucet;
