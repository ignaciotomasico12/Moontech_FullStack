import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"
import NextProgress from "next-progress";
import theme from '@/components/layout/theme'

export default function App({ Component, pageProps : {session, ...pageProps}}) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <NextProgress options={{ showSpinner: false}} color='#082F5E' height='2px'/>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}