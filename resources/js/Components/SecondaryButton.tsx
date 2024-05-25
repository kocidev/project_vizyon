import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

export default function SecondaryButton({
    type = "button",
    className = "",
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            type={type}
            className={classNames(
                "inline-flex items-center",
                "px-4 py-2",
                "border rounded-md",
                "font-semibold text-xs uppercase tracking-widest",
                "shadow-sm",
                "border-gray-300 dark:border-gray-700",
                "text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
                "bg-white dark:bg-shark-950",
                "hover:bg-gray-100 dark:hover:bg-shark-900",
                "focus:ring-2 focus:ring-royal-500 dark:focus:ring-copper-rose-600 focus:ring-offset-2 focus:ring-offset-F7F2EB dark:focus:ring-offset-111216",
                "transition ease-in-out duration-150",
                "disabled:opacity-25",
                className
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
