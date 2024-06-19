'use client'

import { useColorModeValue } from '@chakra-ui/react'
import { Link as ChakraNextLink, LinkProps } from '@chakra-ui/next-js'

/**
 * Link component to use inside Sections
 */
const Link = (props: LinkProps) => {
  const color = useColorModeValue('blue.500', 'blue.200')
  const colorHover = useColorModeValue('blue.700', 'blue.400')

  return (
    <ChakraNextLink
      color={color}
      textDecoration="underline"
      _hover={{
        color: colorHover,
        textDecoration: 'none',
      }}
      {...props}
    >
      {props.children}
    </ChakraNextLink>
  )
}

export default Link
