import {Box, Container, Input} from "@chakra-ui/react";
import {createFileRoute} from "@tanstack/react-router";
import {useQuery} from "@tanstack/react-query";
import React, {useMemo} from "react";
import {MapChart} from "../../components/MapComponent.tsx";

async function fetchDatasets() {
    const query = "{\"query\":\"query { datasets ( limit: 1000 filters: { conformsTo: \\\"https://ofn.gov.cz/úřední-desky/2021-07-20/\\\" } ) { data { iri keyword { cs } title { cs } publisher { title { cs } } distribution { accessURL format } } pagination { totalCount } }}\",\"variables\":null}";
    const response = await fetch("https://data.gov.cz/graphql?", {
        "headers": {
            "accept": "application/json",
            "content-type": "application/json",
        },
        "body": query,
        "method": "POST",
    });
    return (await response.json()).data.datasets.data;
}

export const Route = createFileRoute("/_layout/city-page")({
    component: CityPage,
})

function CityPage() {

    const data = useQuery({
        queryKey: ["items"],
        queryFn: fetchDatasets,
    })

    const dataToDisplay = useMemo(() => {
        return data.data || []
    }, [data.data])

    return (
        <Box
            bgImage="url('/public/usti-bg.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height="100vh"
            width={"100%"}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Container maxW="container.lg" centerContent>
                <MapChart data={dataToDisplay}/>

                <Input
                    placeholder="Search..."
                    mb={10}
                    bg="white"
                    size="lg"
                    borderRadius="md"
                    boxShadow="md"
                />
            </Container>
            <Container maxW="container.lg">

                <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
                    {/* Example News Items */}
                    {dataToDisplay.map((v, index) => (
                      <GridItem key={index} bg="white" p={4} borderRadius="md" boxShadow="md">
                        <Heading as="h3" size="md" mt={4}>
                            {v.title.cs}
                        </Heading>
                      </GridItem>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}