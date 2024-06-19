'use client'

import { Link } from '@chakra-ui/next-js'
import { Stack, useColorModeValue } from '@chakra-ui/react'
import Section from '@/components/Section'
import Logo from '@/components/Logo'

const Footer = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Section as="footer" pt="0">
      <Stack
        pt={{ base: 8, md: 10 }}
        direction="row"
        align="center"
        justify="space-between"
        borderTop="1px solid"
        borderColor={borderColor}
      >
        <Logo showTitle />
        <Stack as="nav" direction="row" align="center" gap="6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </Stack>
      </Stack>
    </Section>
  )
}

export default Footer
