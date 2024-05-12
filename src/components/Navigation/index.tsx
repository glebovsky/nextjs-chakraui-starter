"use client";

import { Container, Box, HStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const Navigation = () => {
  return (
    <Box bg="gray.100" p={4}>
      <Container maxW="container.lg">
        <HStack as="nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navigation;
