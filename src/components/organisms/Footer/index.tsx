'use client'

import { Link } from '@chakra-ui/next-js'
import { Stack, useColorModeValue, useColorMode, IconButton } from '@chakra-ui/react'
import Section from '@/components/molecules/Section'
import { FiMoon, FiSun } from 'react-icons/fi'
import Logo from '@/components/molecules/Logo'

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Section as="footer" pt={{ base: 0, md: 0 }}>
      <Stack
        pt={{ base: 8, md: 10 }}
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        borderTop="1px solid"
        borderColor={borderColor}
        gap="6"
      >
        <Logo showTitle />
        <Stack as="nav" direction="row" align="center" justifyContent="center" gap="6" flexWrap="wrap">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
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

export default Footer
