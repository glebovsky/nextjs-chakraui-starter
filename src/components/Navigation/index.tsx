'use client'

import { Link } from '@chakra-ui/next-js'
import { Stack, Button, useColorModeValue } from '@chakra-ui/react'
import Section from '@/components/Section'
import Logo from '@/components/Logo'

type TNavigationProps = {
  showLogoTitle?: boolean
}

const Navigation = ({ showLogoTitle = false }: TNavigationProps) => {
  const bg = useColorModeValue('gray.50', 'gray.900')

  return (
    <Section py="4" bg={bg}>
      <Stack direction="row" align="center" justify="space-between">
        <Logo showTitle={showLogoTitle} />
        <Stack as="nav" direction="row" align="center" gap="6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Button as={Link} href="/contact" colorScheme="gray">
            Contact
          </Button>
        </Stack>
      </Stack>
    </Section>
  )
}

export default Navigation
