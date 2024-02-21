import React  from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { 
    Box, Flex, Avatar, HStack, Button, Menu, MenuButton, Tooltip,
    Text, MenuList, MenuItem, MenuDivider, VStack, 
} from '@chakra-ui/react'
import { DocumentIcon, UsersIcon, UndoIcon, } from '@/components/assets/icons'
import Logo from '@/components/assets/logo'
import Link from 'next/link'


export default function Header() {
  const { data: session } = useSession();

  return (
    <header>
      <Box bg={'white.900'} px={4} py={1} borderBottom={'1px solid'} 
        borderBottomColor={'grey.300'}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} className='nav_content' gap={5}>
          <Link href={'/'} passHref>
            <Logo width={130} height={70} />
          </Link>
          
          <Flex alignItems={'center'} gap={4} display={{ base: 'none', md: 'flex' }}>
            <HStack as={'nav'} spacing={4}>
              {!session &&
                <Button variant={'primary'} onClick={() => signIn()}>Iniciar sesión</Button>
              }
            </HStack>
            {session && session?.user &&
              <Menu>
                <Tooltip hasArrow label={session?.user?.name} bg={'grey.200'}>
                  <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                    <Avatar size={'sm'} src={session?.user?.imageUrl || ''}/>
                  </MenuButton>
                </Tooltip>
                <MenuList bg={'white.900'}>
                  <VStack alignItems={'flex-start'} gap={0} p={'0px 10px 10px 10px'}>
                    <Text color={'grey.700'} fontSize={14}>{session?.user?.name}</Text>
                    <Text color={'grey.700'} fontSize={12}>{session?.user?.email}</Text>
                  </VStack>
                  <MenuItem bg={'white.900'} _hover={{ backgroundColor: 'primary.100', color: 'primary.500' }}>
                    <Link href={`/usuarios`}>
                      <HStack spacing={2}>
                        <UsersIcon w={18} h={18}/>
                        <Text variant={'subMenuItem'} color={'inherit'}>Usuarios Registrados</Text>
                      </HStack>
                    </Link>
                  </MenuItem>
                  <MenuItem bg={'white.900'} _hover={{ backgroundColor: 'primary.100', color: 'primary.500' }}>
                    <Link href={`/logs`}>
                      <HStack spacing={2}>
                        <DocumentIcon w={18} h={18}/>
                        <Text variant={'subMenuItem'} color={'inherit'}>Logs de sesiones</Text>
                      </HStack>
                    </Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem bg={'white.900'} _hover={{ backgroundColor: 'error.100', color: 'error.500' }} onClick={() => signOut()}>
                    <HStack spacing={2}>
                      <UndoIcon w={18} h={18}/>
                      <Text variant={'subMenuItem'} color={'inherit'}>Cerrar Sesión</Text>
                    </HStack>
                  </MenuItem>
                </MenuList>
              </Menu>
            }
          </Flex>
        </Flex>
      </Box>
    </header>
  )
}