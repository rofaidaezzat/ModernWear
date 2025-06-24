import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
  width?: "w-full" | "w-fit";
}
function Button({ children, className, width = "w-full", ...rest }: Iprops) {
  return (
    <button className={`${className} ${width} rounded-md p-2`} {...rest}>
      {children}
    </button>
  );
}
export default Button;
