import {Box, Container, Text, Input} from "@chakra-ui/react"
import {createFileRoute} from "@tanstack/react-router"
import React, {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";
import {TopicsTable} from "../../components/Topics/TopicsTable.tsx";

export const Route = createFileRoute("/_layout/")({
    component: Dashboard,
})

function Dashboard() {

    const data = useQuery({
        queryKey: ["items"],
        queryFn: async () => {
            const data = await fetch("http://localhost/api/v1/topics/")

            if (data.ok) {
                return await data.json()
            }

            throw new Error("Failed to fetch data")
        },
    })

    const [searchValue, setSearchValue] = React.useState('')

    const handleSearchInput = (event:any) => {
        setSearchValue(event.target.value)
    }

    const informationToDisplay = useMemo(() => {
            if (data.data) {
                return data.data.filter((element:any) => {
                        return element['název']['cs'].includes(searchValue)
                    }
                )
            }
        },
        [data.data, searchValue]
    )

    return (
        <>
            <Container maxW="full">
                <Box pt={12} m={4}>
                    <Text fontSize="2xl">
                    </Text>

                    <Input placeholder='Basic usage' value={searchValue} onInput={handleSearchInput}/>

                    <TopicsTable elements={informationToDisplay || []}/>
                </Box>
            </Container>
        </>
    )
}
