import { Box, Container, Text, Input } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import React from "react";

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
})

function Dashboard() {

  return (
    <>
      <Container maxW="full">
        <Box pt={12} m={4}>
          <Text fontSize="2xl">
          </Text>

          <Input placeholder='Basic usage' />
        </Box>
      </Container>
    </>
  )
}
