import { Stack } from "@chakra-ui/react";
import Container from "./UI/Container";
import UserItem from "./UserItem";

export default function UserList({ users }) {
  return (
    <Container>
        <Stack>
            {users.map((user, index) => <UserItem key={index} user={user} />)}
        </Stack>
    </Container>
  )
}
