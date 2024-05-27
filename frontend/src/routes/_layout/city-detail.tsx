import {Box, Container, Text, Input} from "@chakra-ui/react"
import {createFileRoute} from "@tanstack/react-router"
import React, {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";
import {MasonryVerticalVirtualizerVariable} from "../../components/VirtualGrid.tsx";

type CityDetailSearch = {
    url: string
}

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


export const Route = createFileRoute("/_layout/city-detail")({
    component: Dashboard,
    validateSearch: (search: Record<string, unknown>): CityDetailSearch => {
        // validate and parse the search params into a typed state
        return {
            url: search.url as string,
        }
    },
})


function Dashboard() {
    const { url } = Route.useSearch()

    const data = useQuery({
        queryKey: ["items"],
        queryFn: async () => {
            const data = await fetch(url)

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
        const { informace } = data?.data || {}
            if (informace?.length) {
                return informace?.filter((element: any) => {
                        return element['název']['cs'].includes(debouncedValue)
                    }
                )
            }
        },
        [data.data, debouncedValue]
    )

    return (
        <>
            <Container maxW="full">
                <Box pt={12} m={4}>
                    <Text fontSize="2xl">
                        { data?.data?.title }
                    </Text>

                    <Input placeholder='Basic usage' value={searchValue} onInput={handleSearchInput}/>

                    {!!informationToDisplay?.length && (
                        <MasonryVerticalVirtualizerVariable rows={informationToDisplay}/>
                    )}
                </Box>
            </Container>
        </>
    )
}
