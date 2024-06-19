import { Heading, Text } from '@chakra-ui/react'
import Section from '@/components/Section'
// import Link from '@/components/Link'

const HomeHero = () => {
  return (
    <Section>
      <Heading as="h2" size="sm" opacity="0.3" textTransform="uppercase">
        Plug and play
      </Heading>
      <Heading as="h1" size="4xl">
        Next.js and Chakra UI
        <br />
        starter kit
      </Heading>
      <Text></Text>
    </Section>
  )
}

export default HomeHero
