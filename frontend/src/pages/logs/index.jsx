import React from "react";
import { 
    Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink
} from "@chakra-ui/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { DefaultSeo } from 'next-seo';
import { useRouter } from "next/router";
import { ChevronRightIcon } from '@/components/assets/icons';
import { getAllLogs } from "@/services/logs";
import LogsTable from "@/components/logs/logsTable";
import NextLink from "next/link";
import Layout from '@/components/layout/layout'
import SEO from '@/next-seo.config';


const LogsPage = ({ logs }) => {
    const router = useRouter();
    return (
        <>
            <DefaultSeo 
                {...SEO}
                title='Todos los logs'
                description='Administración de todos los logs de inicios de sesión registrados en la plataforma'
                canonical={process.env.NEXT_PUBLIC_SITE_URL + router.pathname}
            />
            <Layout>
                <Flex flexDirection={'row'} justifyContent='space-between' gap={4} p={0}>
                    <Breadcrumb separator={<ChevronRightIcon w={16} h={16}/>}>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={NextLink} href='/' _hover={{textDecoration: 'none', color:'primary.500'}}>Inicio</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink>Logs</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>
                <LogsTable logs={logs} />
            </Layout>
        </>
    );
};

export default LogsPage;

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    try {
        const logs = await getAllLogs(session.jwt);
        return {
            props: {
                logs: logs?.data,
            },
        };
    } catch (error) {
        return {
            props: {
                logs: [],
            },
        };
    }
  } else {
    return {
        redirect: {
            destination: "/auth/login",
            permanent: false,
        },
    };
  }
}