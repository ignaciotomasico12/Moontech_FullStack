import React from 'react';
import { DefaultSeo } from 'next-seo';

import Layout from '@/components/layout/layout'
import SEO from '@/next-seo.config';
import { Heading, Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Layout>
        <DefaultSeo 
            {...SEO}
            title='Página no encontrada'
        />
        <Box h='100%'>
            <Heading as='h1' size='2xl'>Página no encontrada</Heading>
        </Box>
    </Layout>
  )
}