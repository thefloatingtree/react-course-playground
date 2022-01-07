import { useState } from "react";
import Task from "./components/Tasks/Task";
import Tasks from "./components/Tasks/Tasks";
import Input from "./components/UI/Input";

export default function App() {

  const [value, setValue] = useState("")

  return (
    <div className="flex justify-center w-full py-16 sm:py-32">
      <div className="w-11/12 sm:w-1/2 xl:w-1/3 min-w-sm p-8">
        <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder={"Add a task..."} />
        <Tasks tasks={[ { content: "Testing", checked: true }, { content: "Testing", checked: true }, { content: "Testing", checked: true } ]} ></Tasks>
      </div>
    </div>
  )
}