'use client'

import { useEffect } from 'react'
import { Link } from '@chakra-ui/next-js'
import { Box, Flex, Grid, Button, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import Section from '@/components/molecules/Section'
import Logo from '@/components/molecules/Logo'
import MobileMenuButton from '@/components/organisms/Navigation/MobileMenuButton'

import { navigationMenuItems } from '@/data/navigationMenuItems'

type TNavigationProps = {
  showLogoTitle?: boolean
}

const Navigation = ({ showLogoTitle = false }: TNavigationProps) => {
  const { isOpen, onToggle } = useDisclosure()
  const bg = useColorModeValue('gray.50', 'gray.900')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <Section
      bg={bg}
      py={{ base: 0, md: 4 }}
      height={{ base: '72px', md: 'auto' }}
      position="fixed"
      inset="0 0 auto 0"
      zIndex="sticky"
    >
      <Grid gridTemplateColumns={{ base: '1fr', md: 'auto 1fr' }} gap={{ base: 0, md: '4' }}>
        <Flex justify="space-between">
          <Logo showTitle={showLogoTitle} />
          <MobileMenuButton isOpen={isOpen} onToggle={onToggle} />
        </Flex>

        {/* Menu items */}
        <Flex
          as="nav"
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'flex-start', md: 'center' }}
          gap={{ base: '4', md: '6' }}
          ml={{ base: '0', md: 'auto' }}
          position={{ base: 'fixed', md: 'static' }}
          inset={{ base: '72px 0 0 0', md: 'auto' }}
          p={{ base: '4', md: 0 }}
          bg={bg}
          transition="all 0.3s ease-in-out"
          pointerEvents={{ base: isOpen ? 'auto' : 'none', md: 'auto' }}
          opacity={{ base: isOpen ? 1 : 0, md: 1 }}
        >
          {navigationMenuItems.map((item, index) => {
            const { title, href, isButton } = item

            const handleClick = () => {
              onToggle()
            }

            return (
              <Box key={index}>
                {isButton ? (
                  <Button as={Link} href={href} colorScheme="gray" onClick={handleClick}>
                    {title}
                  </Button>
                ) : (
                  <Link href={href} onClick={handleClick}>
                    {title}
                  </Link>
                )}
              </Box>
            )
          })}
        </Flex>
      </Grid>
    </Section>
  )
}

export default Navigation
