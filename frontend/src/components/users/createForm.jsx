import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { useRouter } from "next/router";
import { Toaster, toast } from 'sonner';
import { Flex, Button, Stack, Box, Switch, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { SuccessIcon, ErrorIcon } from '@/components/assets/icons';
import { useSession } from "next-auth/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { createUser } from "@/services/users";

export default function UserCreateForm() {
    const { data: session } = useSession();
    const { register, handleSubmit } = useForm();
    const { colorMode } = useColorMode();
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);

        if(data['password'] === data['r-password']) {

            const create = await createUser(data, session?.jwt);
            if (create.status === 200) {
                setLoading(false);
                toast.success('Usuario creada', {
                    description: `Usuario creado correctamente. Redirigiendo...`,
                    duration: 3500,
                    icon: <SuccessIcon w={20} h={20}/>
                });
                setTimeout(() => {
                    router.push(`/usuarios`);
                }, 3500);
            } else {
                setLoading(false);
                toast.error('Algo ha ido mal', {
                    description: `Ha ocurrido un error al crear el usuario.`,
                    duration: 3500,
                    icon: <ErrorIcon w={20} h={20}/>
                });
            }
        } else {
            setLoading(false);
            toast.error('Las contraseñas no coinciden', {
                description: `Las contraseñas no coinciden. Por favor, vuelve a intentarlo.`,
                duration: 3500,
                icon: <ErrorIcon w={20} h={20}/>
            });
        }
    }

    return (
        <>
            <Box bgColor={colorMode === 'light' ? "white.900" : 'grey.500'} p={5}
                borderWidth={0} borderRadius="md"
                boxShadow={colorMode === 'light' ? "sm" : 'none'}
                w={{base: 'calc(100% - 2.5rem)', lg: 'full'}} mt={8}
            >
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <Stack spacing={5}>
                        <Flex w='full' justifyContent='space-between' gap={6}>
                            <FormControl display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'left'} gap={2}>
                                <FormLabel m={0} p={0}>Nombre</FormLabel>
                                <Input type='text' variant='ghost' placeholder="Jhon" {...register('firstName')}/>
                            </FormControl>
                            <FormControl display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'left'} gap={2}>
                                <FormLabel m={0} p={0}>Apellido/s</FormLabel>
                                <Input type='text' variant='ghost' placeholder="Doe" {...register('lastName')}/>
                            </FormControl>
                        </Flex>
                        <Flex w='full' justifyContent='space-between' gap={6}>
                            <FormControl display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'left'} gap={2}>
                                <FormLabel m={0} p={0}>Email</FormLabel>
                                <Input type='text' variant='ghost' placeholder="jhondoe@gmail.com" {...register('email')}/>
                            </FormControl>
                            <FormControl display='flex' alignItems='center' mt={8}>
                                <FormLabel htmlFor='email-alerts' mb='0'>
                                    Activo / Inactivo
                                </FormLabel>
                                <Switch id='active' 
                                    colorScheme='primary'
                                    {...register('active')}
                                />
                            </FormControl>
                        </Flex>
                        <Flex w='full' justifyContent='space-between' gap={6}>
                            <FormControl display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'left'} gap={2}>
                                <FormLabel m={0} p={0}>Contraseña</FormLabel>
                                <Input type='password' variant='ghost' {...register('password')}/>
                            </FormControl>
                            <FormControl display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'left'} gap={2}>
                                <FormLabel m={0} p={0}>Repetir contraseña</FormLabel>
                                <Input type='password' variant='ghost' {...register('r-password')}/>
                            </FormControl>
                        </Flex>
                        <Button mt={10} mb={5} variant='primary' type='submit' isLoading={loading} loadingText='Creando...'>
                            Crear
                        </Button>
                    </Stack>
                </form>
            </Box >
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
    )
}