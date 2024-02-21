import React from 'react';
import { Montserrat } from 'next/font/google'
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import Header from './header'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Layout({ children }) {
    const { colorMode } = useColorMode();

    return (
        <Grid
            templateAreas={`
                "header" 
                "main"
                "footer"`}
            gap='1'
            minHeight="100vh"
            templateRows="auto 1fr auto"
            backgroundColor={colorMode === "light" ? "white.100" : "grey.600"}
        >
            <GridItem area={"header"} w="100vw">
                <Header />
            </GridItem>

            <GridItem area={"main"} pt={{base: '80px', md: '80px'}} pb={{base: '95px', md: '0px'}} w="100vw">
                <Container maxW={{ sm: '100%', md: '100%', lg: '1200px' }} className={`${montserrat.className}`} paddingInlineStart={0} paddingInlineEnd={0}
                    pl={{ base: 0, sm: 4, md: 0, lg: 0}} pr={{ base: 0, sm: 4, md: 0, lg: 0}} py={6} w="full" mb={{ base: 0, sm: 28}}>
                    {children}
                </Container>
            </GridItem>

            <GridItem area={"footer"} w="100vw">
            </GridItem>
        </Grid>
    )
};