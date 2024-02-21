import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { Toaster, toast } from 'sonner';
import { useRouter } from "next/router";
import { 
    Tr, Td, Button, useDisclosure, Modal, ModalOverlay,
    useColorMode, Menu, MenuButton, MenuList, MenuItem, HStack, Text, ModalContent, 
    ModalFooter, ModalBody, ModalCloseButton, Heading, Avatar, Switch, Flex 
} from "@chakra-ui/react";
import { SuccessIcon, CloseIcon, EditIcon, MoreIcon, TrashIcon, UserIcon, AdminIcon } from "@/components/assets/icons";
import { deleteUserById, changeUserActive } from "@/services/users";
import NextLink from "next/link";

export default function UserItem({user}) {
    const { colorMode } = useColorMode();
    const { data: session } = useSession();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(user?.active || false);

    async function changeActive(id, status) {
        if(status) {
            const data = { 'active': status === "true" ? true : false };
            try {
                const response = await changeUserActive(id, data, session.jwt);
                if(response.status === 200) {
                    toast.success('Usuario desactivado', {
                        description: `Usuario desactivado correctamente.`,
                        duration: 2000,
                        icon: <SuccessIcon w={20} h={20}/>
                    });
                    setTimeout(() => {
                        router.reload();
                    }, 2000);
                } else {
                    toast.error('Error', {
                        description: `Usuario no desactivado. Vuelve a intentarlo.`,
                        duration: 2000,
                        icon: <CloseIcon w={20} h={20}/>
                    });
                }
            } catch (error) {
                toast.error('Error', {
                    description: 'Ha ocurrido un error. Vuelve a intentarlo.',
                    duration: 2000,
                    icon: <CloseIcon w={20} h={20}/>
                });
            }
        }
    }

    async function deleteUser(id) {
        setLoading(true);
        try {
            const response = await deleteUserById(id, session.jwt);
            if(response.status === 200) {
                toast.success('Usuario eliminado', {
                    description: `Usuario eliminado correctamente.`,
                    duration: 2000,
                    icon: <SuccessIcon w={20} h={20}/>
                });
                setTimeout(() => {
                    router.reload();
                }, 2000);
            } else {
                toast.error('Error', {
                    description: `Usuario no eliminado.`,
                    duration: 2000,
                    icon: <CloseIcon w={20} h={20}/>
                });
            }
        } catch (error) {
            toast.error('Error', {
                description: error,
                duration: 2000,
                icon: <CloseIcon w={20} h={20}/>
            });
        }
        setLoading(false);
        onClose();
    }

    return(
        <>
            <Tr>
                <Td borderColor={colorMode === 'light' ? 'grey.200' : 'grey.300'}
                    paddingInlineEnd={1} paddingInlineStart={1}
                >
                    <Avatar size={'sm'} name={`${user?.firstName} ${user?.lastName}`}/>
                </Td>
                <Td borderColor={colorMode === 'light' ? 'grey.200' : 'grey.300'}
                    paddingInlineEnd={1} paddingInlineStart={1}
                >
                    {`${user?.firstName} ${user?.lastName}`}
                </Td>
                <Td borderColor={colorMode === 'light' ? 'grey.200' : 'grey.300'}
                    paddingInlineEnd={1} paddingInlineStart={1}
                >
                    {user?.email}
                </Td>
                <Td borderColor={colorMode === 'light' ? 'grey.200' : 'grey.300'}
                    paddingInlineEnd={1} paddingInlineStart={1}
                >
                    <Switch 
                        defaultChecked={isActive} 
                        colorScheme={'primary'}
                        onChange={() => {
                            setIsActive(!isActive);
                            changeActive(user?._id, isActive ? 'false' : 'true');
                        }}
                    />
                </Td>
                <Td borderColor={colorMode === 'light' ? 'grey.200' : 'grey.300'}
                    paddingInlineEnd={1} paddingInlineStart={1}
                >
                    <Menu>
                        <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                            <MoreIcon w={20} h={20} />
                        </MenuButton>
                        <MenuList bg={colorMode === 'light' ? 'white.900' : 'grey.600'}>
                            <MenuItem bg={colorMode === 'light' ? 'white.900' : 'grey.600'} _hover={{ backgroundColor: 'primary.100', color: 'primary.500' }}
                                as={NextLink} href={`/usuarios/${user?._id}/editar`}
                            >
                                <HStack spacing={2}>
                                    <EditIcon w={18} h={18}/>
                                    <Text variant={'subMenuItem'} color={'inherit'}>Editar</Text>
                                </HStack>
                            </MenuItem>
                            <MenuItem bg={colorMode === 'light' ? 'white.900' : 'grey.600'} _hover={{ backgroundColor: 'error.100', color: 'error.500' }} 
                                onClick={onOpen}
                            >
                                <HStack spacing={2}>
                                    <TrashIcon w={18} h={18}/>
                                    <Text variant={'subMenuItem'} color={'inherit'}>Eliminar</Text>
                                </HStack>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Td>
            </Tr>
            <Modal isOpen={isOpen} onClose={onClose} isCentered blockScrollOnMount closeOnOverlayClick preserveScrollBarGap>
                <ModalOverlay bg={'black.100'}/>
                <ModalContent bg={'white.900'}>
                    <ModalCloseButton />
                    <ModalBody>
                        <Heading as="h4" size="md" mt={8} mb={5} textAlign="left">
                            {`¿Estás seguro de que quieres eliminar al usuario ${user?.name}?`}
                        </Heading>
                        <Text fontSize="sm" textAlign="left" mt={3} mb={3}>Esta acción no se puede deshacer.</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='error' onClick={() => deleteUser(user?._id)} mr={3} isLoading={loading} loadingText='Eliminando...'>
                            Eliminar
                        </Button>
                        <Button variant='ghost' onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
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