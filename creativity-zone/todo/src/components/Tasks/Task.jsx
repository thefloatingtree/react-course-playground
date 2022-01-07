import { useRecoilState } from "recoil"
import { todoListState } from "../../state/todos"
import TrashIcon from "../Icons/TrashIcon"
import Checkbox from "../UI/Checkbox"

export default function Task({ task }) {
    const [todos, setTodos] = useRecoilState(todoListState)
    const index = todos.findIndex((item) => item === task)

    const onChecked = () => {
        const updatedTodos = todos.map((todo, i) => {
            if (index === i) {
                return { ...todo, checked: !todo.checked }
            }
            return todo
        })

        setTodos(updatedTodos)
    }

    const onDelete = () => {
        const updatedTodos = todos.filter((todo, i) => {
            return index !== i
        })

        setTodos(updatedTodos)
    }

    return <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={onChecked}>
            <Checkbox checked={task.checked}></Checkbox>
            <p className={"font-semibold transition-all " + (task.checked ? "text-gray-900" : "text-gray-400")}>{task.content}</p>
        </div>
        <TrashIcon className="text-gray-900 hover:text-red-500 cursor-pointer transition-all" onClick={onDelete}></TrashIcon>
    </div>
}