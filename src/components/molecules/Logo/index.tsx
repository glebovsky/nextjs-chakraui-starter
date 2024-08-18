'use client'

import { Link } from '@chakra-ui/next-js'
import { Text, useColorModeValue } from '@chakra-ui/react'
import LogoSvg from '@/assets/logo.svg'

import { globalMetadataConfig } from '@/app/metadata'

type TLogoProps = {
  showTitle?: boolean
}

const Logo = ({ showTitle = false }: TLogoProps) => {
  const logoColor = useColorModeValue('black', 'white')

  return (
    <Link
      href="/"
      aria-label="Home"
      display="inline-flex"
      gap="4"
      alignItems="center"
      _hover={{
        textDecoration: 'none',
      }}
      sx={{
        path: {
          fill: logoColor,
        },
        // Just for fun, let's change the color of the last path
        'path:last-child': {
          fill: 'orange.300',
        },
      }}
    >
      <LogoSvg width="2rem" style={{ flexShrink: 0 }} />
      {showTitle && (
        <Text as="span" fontWeight="semibold">
          {globalMetadataConfig.title}
        </Text>
      )}
    </Link>
  )
}

export default Logo
