"use client";

import { Container, Box } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.100" p={4}>
      <Container maxW="container.lg">
        <Box as="nav">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
