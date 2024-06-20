'use client'

import { Flex, BoxProps, Container } from '@chakra-ui/react'

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
    <Flex dir="column" align="center" py={{ base: 14, md: 24 }} {...props}>
      <Container {...containerProps}>{children}</Container>
      {directChildren}
    </Flex>
  )
}

export default Section
