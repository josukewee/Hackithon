import {Box, Container, Text, Input} from "@chakra-ui/react"
import {createFileRoute} from "@tanstack/react-router"
import React, {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";
import { MasonryVerticalVirtualizerVariable} from "../../components/VirtualGrid.tsx";

export const Route = createFileRoute("/_layout/")({
    component: Dashboard,
})

const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value)

    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}

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

    const handleSearchInput = (event: any) => {
        setSearchValue(event.target.value)
    }

    const debouncedValue = useDebounce(searchValue, 200)

    const informationToDisplay = useMemo(() => {
            if (data?.data) {
                return data.data.filter((element: any) => {
                        if (!element?.['název']?.['cs']) {
                            return false
                        }
                        return element['název']['cs'].includes(debouncedValue)
                    }
                )
            }
            return []
        },
        [data.data, debouncedValue]
    )


    return (
        <>
            <Container maxW="full" >
                <Box pt={12} m={4}>
                    <Text fontSize="2xl">
                    </Text>

                    <Input placeholder='Vyhledávání' value={searchValue} onInput={handleSearchInput}/>


                    {!!informationToDisplay.length && (
                        <MasonryVerticalVirtualizerVariable rows={informationToDisplay.reverse()}/>
                    )}

                </Box>
            </Container>
        </>
    )
}
