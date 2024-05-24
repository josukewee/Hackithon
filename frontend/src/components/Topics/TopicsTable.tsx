import React from "react";
import {Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {useVirtualizer} from "@tanstack/react-virtual";
import {Link} from "@tanstack/react-router";

type Props = {
    elements: any[]
}

export const TopicsTable = ({elements}: React.PropsWithChildren<Props>) => {

    const parentRef = React.useRef(null)

    // The virtualizer
    const rowVirtualizer = useVirtualizer({
        count: elements.length,
        getScrollElement: () => parentRef.current!,
        estimateSize: () => 35,
        overscan: 15,
    })

    return (
        <TableContainer ref={parentRef} style={{
            height: '800px',
            overflow: 'auto'
        }}>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Thead>
                <Tbody style={{
                    height: `${rowVirtualizer.getTotalSize()}px`,
                    width: '100%',
                    position: 'relative',
                }}>
                    {rowVirtualizer.getVirtualItems().map((virtualItem, index) => (
                        <Tr key={index} style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: `${virtualItem.size}px`,
                            transform: `translateY(${virtualItem.start}px)`,
                        }}>
                            <Td>
                                {elements[virtualItem.index]['název']['cs']}
                            </Td>
                            <Td>
                                {elements[virtualItem.index]['vyvěšení']['datum']}
                            </Td>
                            <Td isNumeric>
                                <Link to={elements[virtualItem.index]['url']}>
                                    {elements[virtualItem.index]['url']}
                                </Link>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}