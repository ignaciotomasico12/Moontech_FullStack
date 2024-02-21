import React, { useState } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { signIn, getProviders } from "next-auth/react";
import { useForm } from "react-hook-form"
import { Toaster, toast } from 'sonner';
import { 
    Flex, Heading, Stack, Image, Center, Text, Button, Input, FormControl, FormLabel, InputGroup, InputLeftElement, InputRightElement, IconButton
} from "@chakra-ui/react";
import { SuccessIcon, ErrorIcon, UserIcon, KeyIcon, EyeIcon, EyeSlashIcon } from '@/components/assets/icons';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";
import { emailRegister } from "@/services/auth";
import Logo from "@/components/assets/logo";
import Link from "next/link"
import SEO from '@/next-seo.config';

export default function Register() {
    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

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

        const resCreate = await emailRegister(data);

        if (!resCreate.status === 200) {
            setErrors(resCreate.message);
            return;
        } else {
            const responseNextAuth = await signIn("credentials", {email,password,redirect: false});
            console.log(responseNextAuth);

            if (responseNextAuth?.error) {
                setErrors(responseNextAuth.error.split(","));
                setLoading(false);
                toast.error('Error al crear usuario', {
                    description: `Intentelo de nuevo más tarde`,
                    duration: 3000,
                    icon: <ErrorIcon w={20} h={20}/>
                });
            } else {
                toast.success('Usuario creado', {
                    description: `Iniciando sesión como ${responseNextAuth?.user?.name}`,
                    duration: 2000,
                    icon: <SuccessIcon w={20} h={20}/>
                });
                setLoading(false);
                setTimeout(() => {
                    router.push("/");
                }, 1500);
            }
        }
    }

    return (
        <>
            <NextSeo
                {...SEO}
                title={'Registro'}
            />
            <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
                <Flex p={8} flex={1} align={"flex-start"} justify={"center"}>
                    <Stack spacing={4} w={"full"} maxW={"md"}>
                        <Center padding={'0px 0px 40px 0px'}>
                            <Link href='/'>
                                <Logo width={250} height={250} />
                            </Link>
                        </Center>
                        <Heading fontSize={"2xl"} fontFamily={'Montserrat'}>Bienvenid@, crea tu cuenta !</Heading>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Flex w='full' justifyContent='space-between' flexDir={'column'} gap={5}>
                                <Flex w='full' justifyContent='space-between' flexDir={'row'} gap={5}>
                                    <FormControl>
                                        <FormLabel>Nombre</FormLabel>
                                        <Input type='text' variant='ghost' placeholder="Jhon" {...register('firstName')}/>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Apellido</FormLabel>
                                        <Input type='text' variant='ghost' placeholder="Doe" {...register('lastName')}/>
                                    </FormControl>
                                </Flex>
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
                                Registrarse
                            </Button>
                        </form>
                        <Flex align={"center"} justify={"flex-start"} gap={2}>
                            <Text align={"center"}>
                                ¿Ya tienes cuenta?{" "}
                            </Text>
                            <Link href={"/auth/login"} >
                                <Text color={'primary.500'}>¡Inicia sesión!</Text>
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
