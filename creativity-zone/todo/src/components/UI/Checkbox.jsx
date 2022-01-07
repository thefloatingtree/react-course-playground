export default function Checkbox({ checked, onChange }) {
    return <div>
        <div
            onClick={onChange}
            className={"w-6 h-6 rounded flex justify-center items-center transition-all ease-in duration-100 " + (checked ? "border-gray-900 border-[12px]" : "border-gray-400 border-[3px]")}
        ></div>
    </div>
}