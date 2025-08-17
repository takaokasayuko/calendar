import { InputHTMLAttributes } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    field: string;
    value: string;
    setData: (filed: string, value: string) => void;
};

export default function TextInput({
    field,
    value,
    setData,
    ...props
}: TextInputProps) {
    return (
        <input id={field} type="text" name={field} value={value} onChange={(e) => setData(field, e.target.value)} {...props}  className="rounded-md  w-full sm:w-80 md:w-96 lg:w-[500px] border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
    );
}