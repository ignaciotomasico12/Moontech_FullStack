import React, { useState } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { signIn, getProviders } from "next-auth/react";
import { set, useForm } from "react-hook-form"
import { Toaster, toast } from 'sonner';
import { 
    Flex, Heading, Stack, Image, Center, Text, Button, Input, FormControl, FormLabel, InputGroup, InputLeftElement, InputRightElement, IconButton,
    AbsoluteCenter, Divider, Box
} from "@chakra-ui/react";
import { SuccessIcon, ErrorIcon, UserIcon, KeyIcon, EyeIcon, EyeSlashIcon } from '@/components/assets/icons';
import { FcGoogle } from "react-icons/fc";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";
import Logo from "@/components/assets/logo";
import Link from "next/link"
import SEO from '@/next-seo.config';

export default function Login(props) {
    const router = useRouter();
    const { error } = router.query;
    const { register, handleSubmit, formState: { errors } } = useForm()

    const [loading, setLoading] = useState(false);
    const [errorsForm, setErrors] = useState([]);
    const [passwordType, setPasswordType] = useState('password');

    const togglePassword = () => {
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
    }

    const onSubmit = async (data) => {
        setLoading(true);
        setErrors([]);

        const email = data?.email;
        const password = data?.password;

        const responseNextAuth = await signIn("credentials", {
            email: email,
            password: password,
            redirect: false,
        });
      
        if (responseNextAuth?.error) {
            setLoading(false);
            setErrors(responseNextAuth.error.split(","));
            toast.error('Error al iniciar sesión', {
                description: `Usuario o contraseña incorrectos. Intentelo de nuevo`,
                duration: 3000,
                icon: <ErrorIcon w={20} h={20}/>
            });
        } else {
            toast.success('Iniciando sesión', {
                description: `Bienvenido de nuevo ${responseNextAuth?.user?.name}`,
                duration: 2000,
                icon: <SuccessIcon w={20} h={20}/>
            });
            setLoading(false);
            setTimeout(() => {
                router.push("/");
            }, 1500);
        }
    }

    return (
        <>
            <NextSeo
                {...SEO}
                title='Iniciar Sesión'
            />
            <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
                <Flex p={8} flex={1} align={"flex-start"} justify={"center"}>
                    <Stack spacing={4} w={"full"} maxW={"md"}>
                        <Center padding={'0px 0px 40px 0px'}>
                            <Link href='/'>
                                <Logo width={250} height={250} />
                            </Link>
                        </Center>
                        <Heading fontSize={"2xl"} fontFamily={'Montserrat'}>Bienvenid@ de nuevo</Heading>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Flex w='full' justifyContent='space-between' flexDir={'column'} gap={5}>
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents='none'>
                                            <UserIcon w={20} h={20} />
                                        </InputLeftElement>
                                        <Input type='text' variant='ghost' placeholder="jhondoe@gamil.com" {...register('email')}/>
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Contraseña</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents='none'>
                                            <KeyIcon w={20} h={20} />
                                        </InputLeftElement>
                                        <Input type={passwordType} variant='ghost' {...register('password')}/>
                                        <InputRightElement>
                                            <IconButton onClick={() => togglePassword()} variant={'ghost'}
                                                _hover={{ backgroundColor: 'primary.100', color: 'primary.500' }} size={'sm'}
                                            >
                                                {passwordType === 'text' ? <EyeSlashIcon w={18} h={18} /> : <EyeIcon w={18} h={18} />}
                                            </IconButton>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                            </Flex>
                            <Button mt={10} mb={5} w={'full'} p={5} variant='primary' type='submit' isLoading={loading} loadingText='Cargando...'>
                                Iniciar Sesión
                            </Button>
                        </form>
                        <Flex align={"center"} justify={"flex-start"} gap={2}>
                            <Text align={"center"}>
                                ¿No tienes cuenta?{" "}
                            </Text>
                            <Link href={"/auth/register"} >
                                <Text color={'primary.500'}>¡Registrate ahora!</Text>
                            </Link>
                        </Flex>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Image
                        alt={"Login Image"}
                        objectFit={"cover"}
                        src={"/img/login_cover.jpg"}
                    />
                </Flex>
            </Stack>
            <Toaster closeButton richColors position="bottom-center"
                toastOptions={{
                    style: {
                        fontWeight: "normal",
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        alignItems: "flex-start",
                    },
                }}
            />
        </>
    );
}

export async function getServerSideProps({ req, res }) {
    const session = await getServerSession(req, res, authOptions);
    if (session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    const signInProviders = await getProviders();
    return {
        props: {
            signInProviders,
        },
    };
}
