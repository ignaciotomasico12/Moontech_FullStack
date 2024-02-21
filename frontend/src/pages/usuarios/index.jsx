import React from "react";
import { 
    Flex, Breadcrumb, Button, BreadcrumbItem, BreadcrumbLink
} from "@chakra-ui/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { DefaultSeo } from 'next-seo';
import { useRouter } from "next/router";
import { AddSquareIcon, ChevronRightIcon } from '@/components/assets/icons';
import { getAllUsers } from "@/services/users";
import UsersTable from "@/components/users/usersTable";
import NextLink from "next/link";
import Layout from '@/components/layout/layout'
import SEO from '@/next-seo.config';


const UsersPage = ({ users }) => {
    const router = useRouter();

    return (
        <>
            <DefaultSeo 
                {...SEO}
                title='Todos los usuarios'
                description='Administración de todos los usuarios registrados en la plataforma'
                canonical={process.env.NEXT_PUBLIC_SITE_URL + router.pathname}
            />
            <Layout>
                <Flex flexDirection={'row'} justifyContent='space-between' gap={4}>
                    <Breadcrumb separator={<ChevronRightIcon w={16} h={16}/>}>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={NextLink} href='/' _hover={{textDecoration: 'none', color:'primary.500'}}>Inicio</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink>Usuarios</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Button variant='primary' as={NextLink} href='/usuarios/nuevo-usuario' gap={3}>
                        <AddSquareIcon w={20} h={20} />
                        Nuevo Usuario
                    </Button>
                </Flex>
                <UsersTable users={users} />
            </Layout>
        </>
    );
};

export default UsersPage;

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    try {
        const users = await getAllUsers(session.jwt);
        return {
            props: {
                users: users?.data,
            },
        };
    } catch (error) {
        return {
            props: {
                users: [],
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