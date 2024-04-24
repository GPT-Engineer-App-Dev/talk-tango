import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function HomePage() {
  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold">Welcome to GPT Engineer Chat App</Text>
      <Text mt={3}>This is a prototype of a chat application similar to WhatsApp. Here you can engage in individual and group chats, check message statuses, and send multimedia messages.</Text>
    </Box>
  );
}

export default HomePage;