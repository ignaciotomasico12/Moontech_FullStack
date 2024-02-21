import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { useRouter } from "next/router";
import { Toaster, toast } from 'sonner';
import { Flex, Button, Stack, Box, Switch, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { SuccessIcon, ErrorIcon } from '@/components/assets/icons';
import { useSession } from "next-auth/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { updateUser } from "@/services/users";

export default function UserEditForm({user}) {
    const { data: session } = useSession();
    const { register, handleSubmit } = useForm();
    const { colorMode } = useColorMode();
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);

        const update = await updateUser(data, user?._id, session?.jwt);
        if (update.status === 200) {
            setLoading(false);
            toast.success('Usuario actualizado', {
                description: `Usuario actualizado correctamente. Redirigiendo...`,
                duration: 3500,
                icon: <SuccessIcon w={20} h={20}/>
            });
            setTimeout(() => {
                router.push(`/usuarios`);
            }, 3500);
        } else {
            setLoading(false);
            toast.error('Algo ha ido mal', {
                description: `Ha ocurrido un error al actualizar el usuario.`,
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
                w={{base: '100%', lg: 'full'}} mt={8}
            >
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <Stack spacing={5}>
                        <Flex w='full' justifyContent='space-between' gap={6} flexDirection={['column', 'row']}>
                            <FormControl display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'left'} gap={2}>
                                <FormLabel m={0} p={0}>Nombre</FormLabel>
                                <Input type='text' variant='ghost' placeholder="Jhon" defaultValue={user?.firstName} {...register('firstName')}/>
                            </FormControl>
                            <FormControl display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'left'} gap={2}>
                                <FormLabel m={0} p={0}>Apellido/s</FormLabel>
                                <Input type='text' variant='ghost' placeholder="Doe" defaultValue={user?.lastName} {...register('lastName')}/>
                            </FormControl>
                        </Flex>
                        <Flex w='full' justifyContent='space-between' gap={6} flexDirection={['column', 'row']}>
                            <FormControl display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'left'} gap={2}>
                                <FormLabel m={0} p={0}>Email</FormLabel>
                                <Input type='text' variant='ghost' placeholder="jhondoe@gmail.com" defaultValue={user?.email} {...register('email')}/>
                            </FormControl>
                            <FormControl display='flex' alignItems='center' mt={8}>
                                <FormLabel htmlFor='email-alerts' mb='0'>
                                    Activo / Inactivo
                                </FormLabel>
                                <Switch id='active' 
                                    defaultChecked={user?.active}
                                    colorScheme='primary'
                                    {...register('active')}
                                />
                            </FormControl>
                        </Flex>
                        <Button mt={10} mb={5} variant='primary' type='submit' isLoading={loading} loadingText='Actualizando...'
                            w={{base: '100%', lg: 'fit-content', md: 'fit-content', xl: 'fit-content'}}
                        >
                            Actualizar
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