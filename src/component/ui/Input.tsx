import { InputHTMLAttributes } from "react";
interface Iprops extends InputHTMLAttributes<HTMLInputElement> {}
function Input({ ...rest }: Iprops) {
  return (
    <input
      className="border-2 border-gray-300 shadow-md focus:outline-none focus:border-indigo-500 focus:ring-2 rounded-md p-3 text-md"
      {...rest}
    />
  );
}
export default Input;
