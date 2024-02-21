import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from "@chakra-ui/react";
import theme from '@/components/layout/theme'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content = "#ffffff" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content = "#008F39" />
          <meta name="robots" content="all" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="https://moontech-industrial.com/wp-content/uploads/2024/02/cropped-moontech-fav-32x32.webp" sizes="32x32" />
          <link rel="icon" href="https://moontech-industrial.com/wp-content/uploads/2024/02/cropped-moontech-fav-192x192.webp" sizes="192x192" />
          <link rel="apple-touch-icon" href="https://moontech-industrial.com/wp-content/uploads/2024/02/cropped-moontech-fav-180x180.webp"/>
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
