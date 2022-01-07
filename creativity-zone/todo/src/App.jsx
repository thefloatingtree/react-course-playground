import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import ArrowLeftIcon from "./components/Icons/ArrowLeftIcon";
import ArrowRightIcon from "./components/Icons/ArrowRightIcon";
import ClockIcon from "./components/Icons/ClockIcon";
import PlusIcon from "./components/Icons/PlusIcon";
import Tasks from "./components/Tasks/Tasks";
import Input from "./components/UI/Input";
import { filteredTodoListState, selectedDayState, todoListState } from "./state/todos";
import { addDaysToDate } from "./util/addDaysToDate";

export default function App() {

  const [value, setValue] = useState("")
  const [todos, setTodos] = useRecoilState(todoListState)
  const filteredTodos = useRecoilValue(filteredTodoListState)
  const [selectedDay, setSelectedDay] = useRecoilState(selectedDayState)

  const onAddTodo = () => {
    if (!value) return
    setTodos([{ content: value, checked: false, day: selectedDay }, ...todos])
    setValue('')
  }

  const onChangeSelectedDay = (amount) => {
    setSelectedDay(addDaysToDate(new Date(selectedDay), amount).toLocaleDateString())
  }

  const onResetSelectedDay = () => {
    setSelectedDay((new Date()).toLocaleDateString())
  }

  return (
    <div className="flex justify-center w-full py-16 sm:py-32">
      <div className="w-11/12 sm:w-1/2 xl:w-1/3 min-w-sm p-8">
        <div className="flex items-center justify-between pb-3">
          <h1 className="text-gray-300 font-bold text-4xl select-none">{selectedDay}</h1>
          <div className="flex space-x-3">
            <ClockIcon className={"hover:text-gray-300 cursor-pointer transition-all " + ((new Date()).toLocaleDateString() === selectedDay ? "text-blue-500" : "text-gray-950")} onClick={() => onResetSelectedDay()} />
            <ArrowLeftIcon className="text-gray-950 hover:text-gray-300 cursor-pointer transition-all" onClick={() => onChangeSelectedDay(-1)} />
            <ArrowRightIcon className="text-gray-950 hover:text-gray-300 cursor-pointer transition-all" onClick={() => onChangeSelectedDay(1)} />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder={"Add a task..."} onEnter={onAddTodo} />
          <PlusIcon className="text-gray-950 hover:text-gray-300 cursor-pointer transition-all" onClick={onAddTodo} />
        </div>
        <Tasks tasks={filteredTodos} />
      </div>
    </div>
  )
}