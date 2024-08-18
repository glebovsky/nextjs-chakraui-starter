import { Heading, Text } from '@chakra-ui/react'
import Section from '@/components/molecules/Section'
import Link from '@/components/atoms/Link'

const HomeHero = () => {
  return (
    <Section minH="90vh">
      <Heading
        as="h2"
        size={{ base: 'xs', md: 'sm' }}
        opacity="0.3"
        textTransform="uppercase"
        textAlign="center"
        mb="2"
      >
        Plug and play
      </Heading>
      <Heading as="h1" size={{ base: 'xl', md: '2xl' }} textAlign="center">
        <Link href="https://nextjs.org/" isExternal>
          Next.js
        </Link>{' '}
        and{' '}
        <Link href="https://v2.chakra-ui.com/getting-started" isExternal>
          Chakra UI
        </Link>{' '}
        <Text as="span" display={{ base: 'inline', md: 'block' }}>
          starter kit
        </Text>
      </Heading>
      <Text></Text>
    </Section>
  )
}

export default HomeHero
