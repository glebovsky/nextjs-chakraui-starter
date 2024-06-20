'use client'

import { Link } from '@chakra-ui/next-js'
import { Box, Grid, Flex, Stack, Button, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import Section from '@/components/Section'
import Logo from '@/components/Logo'

type TNavigationProps = {
  showLogoTitle?: boolean
}

const Navigation = ({ showLogoTitle = false }: TNavigationProps) => {
  const { isOpen, onToggle } = useDisclosure()
  const bg = useColorModeValue('gray.50', 'gray.900')

  return (
    <Section py="4" bg={bg} position="fixed" inset="0 0 auto 0" zIndex="sticky">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'stretch', md: 'center' }}
        justify="space-between"
      >
        <Flex justify="space-between">
          <Logo showTitle={showLogoTitle} />
          <MobileMenuButton isOpen={isOpen} onToggle={onToggle} />
        </Flex>
        <Stack as="nav" direction="row" align="center" gap="6" display={{ base: 'none', md: 'flex' }}>
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

const MobileMenuButton = ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => {
  return (
    <Button display={{ base: 'inline-flex', md: 'none' }} variant="ghost" colorScheme="gray" onClick={onToggle}>
      {isOpen ? 'Hide' : 'Show'}
    </Button>
  )
}

export default Navigation
