import React from 'react';
import { Montserrat } from 'next/font/google'
import { Container, Grid, GridItem } from "@chakra-ui/react";
import Header from './header'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Layout({ children }) {

    return (
        <Grid
            templateAreas={`
                "header" 
                "main"
                "footer"`}
            gap='1'
            minHeight="100vh"
            templateRows="auto 1fr auto"
            backgroundColor={"white.100"}
        >
            <GridItem area={"header"} w="100vw">
                <Header />
            </GridItem>

            <GridItem area={"main"} pt={{base: '80px', md: '80px'}} pb={{base: '95px', md: '0px'}} w="100vw">
                <Container maxW={{ sm: '100%', md: '100%', lg: '1200px' }} className={`${montserrat.className}`} paddingInlineStart={{base: '0px', sm:'10px', md: '10px', xs: '10px'}}
                    paddingInlineEnd={{base: '0px', sm:'10px', md: '10px', xs: '10px'}} paddingLeft={{base: '10px', md: '0px', lg: '0px'}} paddingRight={{base: '10px', md: '0px', lg: '0px'}}
                    py={6} w="full" mb={{ base: 0, sm: 28}}>
                    {children}
                </Container>
            </GridItem>

            <GridItem area={"footer"} w="100vw">
            </GridItem>
        </Grid>
    )
};