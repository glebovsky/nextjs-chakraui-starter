'use client'

import { Link } from '@chakra-ui/next-js'
import { Text, Stack, Button, useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import Section from '@/components/Section'
import { FiMoon, FiSun } from 'react-icons/fi'
import Logo from '@/assets/logo.svg'

import { globalMetadataConfig } from '@/app/metadata'

type TNavigationProps = {
  showLogoTitle?: boolean
}

const Navigation = ({ showLogoTitle = false }: TNavigationProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('gray.50', 'gray.800')
  const logoColor = useColorModeValue('black', 'white')

  return (
    <Section py="4" bg={bg}>
      <Stack direction="row" align="center" justify="space-between">
        <Link
          href="/"
          aria-label="Home"
          display="flex"
          gap="4"
          alignItems="center"
          _hover={{
            textDecoration: 'none',
          }}
          sx={{
            path: {
              fill: logoColor,
            },
            'path:last-child': {
              fill: 'orange.300',
            },
          }}
        >
          <Logo width="2rem" />
          {showLogoTitle && (
            <Text as="span" fontWeight="semibold">
              {globalMetadataConfig.title}
            </Text>
          )}
        </Link>
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
