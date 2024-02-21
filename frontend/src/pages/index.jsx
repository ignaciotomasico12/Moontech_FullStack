import React from 'react';
import { DefaultSeo } from 'next-seo';
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Layout from '@/components/layout/layout'
import SEO from '@/next-seo.config';

export default function Home() {
  return (
    <>
      <DefaultSeo 
        {...SEO}
        title='Inicio'
      />
      <Layout>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  } else {
    return {
      props: { session },
      redirect: {
        destination: "/usuarios",
        permanent: false,
      },
    };
  }
}