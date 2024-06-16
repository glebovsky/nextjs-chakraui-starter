'use client'

import { Link } from '@chakra-ui/next-js'
import { Stack } from '@chakra-ui/react'
import Section from '@/components/Section'

const Footer = () => {
  return (
    <Section as="footer" py="4">
      <Stack direction="row" as="nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </Stack>
    </Section>
  )
}

export default Footer
