import { Button, ButtonGroup, Input, Stack } from "@chakra-ui/react";
import Container from "./UI/Container";

export default function Form({ }) {
    return (
        <Container>
            <Stack spacing={3}>
                <Input placeholder='Username' />
                <Input placeholder='Age (Years)' />
                <ButtonGroup>
                    <Button colorScheme='purple'>Add User</Button>
                </ButtonGroup>
            </Stack>
        </Container>
    )
}