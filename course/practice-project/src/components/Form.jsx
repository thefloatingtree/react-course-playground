import { Button, ButtonGroup, Input, Stack, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import Alert from "./Alert";
import Container from "./UI/Container";

export default function Form({ onSubmit }) {

    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")

    const [dialogueMessage, setDialogueMessage] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure()

    const _onSubmit = () => {
        const user = {
            username,
            age: parseInt(age)
        }

        if (!user.username || !user.age) {
            setDialogueMessage("Please enter a valid name and age (non-empty values).")
            onOpen()
            return
        }

        if (user.age <= 0) {
            setDialogueMessage("Please enter a valid age (> 0).")
            onOpen()
            return
        }

        setUsername("")
        setAge("")

        onSubmit(user)
    }

    return (
        <>
            <Alert isOpen={isOpen} onClose={onClose} message={dialogueMessage} />
            <Container>
                <Stack spacing={3}>
                    <Input value={username} onChange={(event) => setUsername(event.target.value)} placeholder='Username' />
                    <Input type='number' step={1} value={age} onChange={(event) => setAge(event.target.value)} placeholder='Age (Years)' />
                    <ButtonGroup>
                        <Button onClick={_onSubmit} colorScheme='purple'>Add User</Button>
                    </ButtonGroup>
                </Stack>
            </Container>
        </>
    )
}