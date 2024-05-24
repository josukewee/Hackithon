import {Box, Container, Grid, Input} from "@chakra-ui/react";
import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/city-page")({
    component: CityPage,
})

function CityPage() {
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
        <Container maxW="container.md" centerContent>
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
            {/*{Array.from({ length: 8 }).map((_, index) => (*/}
            {/*  <GridItem key={index} bg="white" p={4} borderRadius="md" boxShadow="md">*/}
            {/*    <Image src={`https://via.placeholder.com/250?text=News+${index + 1}`} alt={`News ${index + 1}`} borderRadius="md" />*/}
            {/*    <Heading as="h3" size="md" mt={4}>*/}
            {/*      News Title {index + 1}*/}
            {/*    </Heading>*/}
            {/*    <Text mt={2}>*/}
            {/*      This is a short description of news item {index + 1}. It provides a brief overview of the content.*/}
            {/*    </Text>*/}
            {/*  </GridItem>*/}
            {/*))}*/}
          </Grid>
        </Container>
      </Box>
    )
}