export default function Input({ value, onChange, onEnter, placeholder }) {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onEnter()
        }
    }

    return <input
        type="text"
        className="rounded w-full py-2 px-3 text-gray-300 placeholder:text-gray-700 font-semibold bg-gray-900 outline-none focus:bg-gray-950 transition-all"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
    />
}