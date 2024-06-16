'use client'

import { Box, BoxProps, Container } from '@chakra-ui/react'

type TSectionProps = {
  children: React.ReactNode
  /**
   * Direct children are rendered outside of the container
   */
  directChildren?: React.ReactNode
  /**
   * Props for the container component
   */
  containerProps?: BoxProps
}

const Section = ({ children, directChildren, containerProps, ...props }: TSectionProps & BoxProps) => {
  return (
    <Box py={{ base: 6, md: 12 }} {...props}>
      <Container {...containerProps}>{children}</Container>
      {directChildren}
    </Box>
  )
}

export default Section
