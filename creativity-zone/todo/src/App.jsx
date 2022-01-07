import { useState } from "react";
import { useRecoilState } from "recoil";
import ArrowLeftIcon from "./components/Icons/ArrowLeftIcon";
import ArrowRightIcon from "./components/Icons/ArrowRightIcon";
import Tasks from "./components/Tasks/Tasks";
import Input from "./components/UI/Input";
import { todoListState } from "./state/todos";

export default function App() {

  const [value, setValue] = useState("")
  const [todos, setTodos] = useRecoilState(todoListState)

  const onAddTodo = () => {
    if (!value) return
    setTodos([ { content: value, checked: false }, ...todos ])
    setValue('')
  }

  return (
    <div className="flex justify-center w-full py-16 sm:py-32">
      <div className="w-11/12 sm:w-1/2 xl:w-1/3 min-w-sm p-8">
        <div className="flex items-center justify-between pb-3">
          <h1 className="text-gray-950 font-bold text-3xl">{(new Date()).toLocaleDateString()}</h1>
          <div className="flex space-x-3">
            <ArrowLeftIcon className="text-gray-950 hover:text-gray-400 cursor-pointer transition-all"></ArrowLeftIcon>
            <ArrowRightIcon className="text-gray-950 hover:text-gray-400 cursor-pointer transition-all"></ArrowRightIcon>
          </div>
        </div>
        <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder={"Add a task..."} onEnter={onAddTodo} />
        <Tasks tasks={todos} ></Tasks>
      </div>
    </div>
  )
}