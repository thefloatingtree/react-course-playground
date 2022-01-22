import { Stack } from "@chakra-ui/react";
import { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";

function App() {

  const [users, setUsers] = useState([]);

  return (
    <Stack>
      <Form onSubmit={user => setUsers(prev => [user, ...prev])} />
      {users.length && <UserList users={users} />}
    </Stack>
  );
}

export default App;
