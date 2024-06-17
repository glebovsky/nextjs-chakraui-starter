import { globalMetadata } from '@/app/metadata'
import Providers from '@/app/providers'

import { Box } from '@chakra-ui/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = globalMetadata

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // `suppressHydrationWarning` is used to suppress the warning about adding additional attributes (from libs like Chakra UI) to the `html` and `body` tags after page hydration
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Providers>
          <Navigation />
          <Box as="main">{children}</Box>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
