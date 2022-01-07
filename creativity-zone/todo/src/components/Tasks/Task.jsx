export default function Task({ task }) {
    return <div className="flex items-center space-x-3">
        <input type="checkbox" checked={task.checked} />
        <p className="text-gray-300 font-semibold">{task.content}</p>
    </div>
}