import Task from "./Task";

export default function Tasks({ tasks }) {
    return <div className="space-y-3 py-3">
        {tasks.map((task, index) => <Task task={task} key={index}></Task>)}
        {!tasks.length && <p className="font-semibold text-gray-950">No tasks yet, add some!</p>}
    </div>
}