import Task from "./Task";

export default function Tasks({ tasks }) {
    return <div className="space-y-3 py-3">
        {tasks.map((task, index) => <Task task={task} key={index}></Task>)}
    </div>
}