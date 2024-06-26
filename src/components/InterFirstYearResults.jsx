import React from 'react'
import { Table, Text } from '@mantine/core'
function InterFirstYearResults() {
    return (
        <Table withTableBorder withColumnBorders>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>
                        <Text c="#E98918" fw={700} ta="center">Subject</Text>
                    </Table.Th>
                    <Table.Th>
                        <Text c="#E98918" fw={700} ta="center">Marks</Text>
                    </Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                <Table.Tr>
                    <Table.Td>
                        <Text c="white">1</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text ta="center" c="white" fw={600}>English Paper-1</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text ta="center" c="white" fw={600}>70</Text>
                    </Table.Td>
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        <Text c="white">2</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text ta="center" c="white" fw={600}>Telugu Paper-1</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text ta="center" c="white" fw={600}>65</Text>
                    </Table.Td>
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        <Text c="white">3</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text ta="center" c="white" fw={600}>Maths A Paper-1</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text ta="center" c="white" fw={600}>55</Text>
                    </Table.Td>
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        <Text c="white">4</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text ta="center" c="white" fw={600}>Maths B Paper-1</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text ta="center" c="white" fw={600}>59</Text>
                    </Table.Td>
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        <Text c="white">5</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text ta="center" c="white" fw={600}>Physics Paper-1</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text ta="center" c="white" fw={600}>50</Text>
                    </Table.Td>
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>
                        <Text c="white">6</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text ta="center" c="white" fw={600}>Chemistry Paper-1</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text ta="center" c="white" fw={600}>52</Text>
                    </Table.Td>
                </Table.Tr>
            </Table.Tbody>
        </Table>
    )
}

export default InterFirstYearResults