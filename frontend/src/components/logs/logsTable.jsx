import React from "react";
import { Table, Tbody, TableContainer, Thead, Tr, Th } from "@chakra-ui/react";
import LogItem from "./logItem";

export default function LogsTable({logs}) {

    return(
        <TableContainer mt={10}>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th paddingInlineEnd={1} paddingInlineStart={1} fontSize={'sm'}>#ID</Th>
                        <Th paddingInlineEnd={1} paddingInlineStart={1} fontSize={'sm'}>Usuario</Th>
                        <Th paddingInlineEnd={1} paddingInlineStart={1} fontSize={'sm'}>Fecha y Hora</Th>
                        <Th paddingInlineEnd={1} paddingInlineStart={1} fontSize={'sm'}>Tipo login</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {logs.map((log, index) => (
                        <LogItem log={log} key={index}/>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}