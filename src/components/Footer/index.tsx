'use client'

import { Link } from '@chakra-ui/next-js'
import { Stack } from '@chakra-ui/react'
import Section from '@/components/Section'
import Logo from '@/components/Logo'

const Footer = () => {
  return (
    <Section as="footer" py="4">
      <Stack direction="row" align="center" justify="space-between">
        <Logo showTitle />
        <Stack direction="row" as="nav" align="center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </Stack>
      </Stack>
    </Section>
  )
}

export default Footer
