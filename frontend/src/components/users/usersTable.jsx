import React from "react";
import { Table, Tbody, TableContainer, Thead, Tr, Th } from "@chakra-ui/react";
import UserItem from "./usersItem";

export default function UsersTable({users}) {

    return(
        <TableContainer mt={10}>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th paddingInlineEnd={1} paddingInlineStart={1} fontSize={'sm'}>Nombre</Th>
                        <Th paddingInlineEnd={1} paddingInlineStart={1} fontSize={'sm'}>Email</Th>
                        <Th paddingInlineEnd={1} paddingInlineStart={1} fontSize={'sm'}>Activo</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map((user, index) => (
                        <UserItem user={user} key={index}/>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}