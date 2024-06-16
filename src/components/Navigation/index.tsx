'use client'

import { Link } from '@chakra-ui/next-js'
import { Stack, Button, useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import Section from '@/components/Section'
import { FiMoon, FiSun } from 'react-icons/fi'
import Logo from '@/components/Logo'

type TNavigationProps = {
  showLogoTitle?: boolean
}

const Navigation = ({ showLogoTitle = false }: TNavigationProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('gray.50', 'gray.900')

  return (
    <Section py="4" bg={bg}>
      <Stack direction="row" align="center" justify="space-between">
        <Logo showTitle={showLogoTitle} />
        <Stack as="nav" direction="row" align="center" gap="6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Button as={Link} href="/contact" colorScheme="orange">
            Contact
          </Button>
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
            onClick={toggleColorMode}
          />
        </Stack>
      </Stack>
    </Section>
  )
}

export default Navigation
