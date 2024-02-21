import React from "react";
import { 
    Flex, Breadcrumb, Button, BreadcrumbItem, BreadcrumbLink
} from "@chakra-ui/react";
import { getServerSession } from "next-auth/next";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { ChevronRightIcon } from '@/components/assets/icons';
import { getUserById } from "@/services/users";
import Layout from '@/components/layout/layout'
import NextLink from "next/link";
import UserEditForm from "@/components/users/editForm";
import SEO from '@/next-seo.config';

export default function EditUser(props) {
    const router = useRouter();
    return (
        <>
            <DefaultSeo
                {...SEO}
                title='Nuevo usuario'
                description='Crear un nuevo usuario para la plataforma. Solo los administradores pueden crear un nuevo.'
                canonical={process.env.NEXT_PUBLIC_SITE_URL + router.pathname}
            />
            <Layout>
                <Flex flexDirection={['column', 'row']} justifyContent='space-between' gap={4} p={0}>
                    <Breadcrumb separator={<ChevronRightIcon w={16} h={16}/>}>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={NextLink} href='/' _hover={{textDecoration: 'none', color:'primary.500'}}>Inicio</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={NextLink} href='/usuarios' _hover={{textDecoration: 'none', color:'primary.500'}}>Usuarios</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink>{`${props?.user?.firstName} ${props?.user?.lastName}`}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>
                <UserEditForm user={props?.user} />
            </Layout>
        </>
    );
}

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions);
    if (session) {
        const user = await getUserById(context.params.userId, session.jwt);
        return {
            props: {
                user: user?.data
            }
        };
    } else if (session?.user?.role !== 'admin') {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    } else {
        return {
            redirect: {
                destination: "/auth/login",
                permanent: false,
            },
        };
    }
}