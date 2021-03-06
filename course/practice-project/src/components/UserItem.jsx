import { Box } from "@chakra-ui/react";

export default function UserItem({ user }) {
    return (
        <Box borderWidth='1px' borderRadius='lg' padding='0.75rem'>
            {user.username} ({user.age} years old)
        </Box>
    )
}
