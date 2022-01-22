import { Stack } from "@chakra-ui/react";
import { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";

function App() {

  const [users, setUsers] = useState([{ name: "Horse", age: 24 }]);

  return (
    <Stack>
      <Form />
      <UserList users={users} />
    </Stack>
  );
}

export default App;
