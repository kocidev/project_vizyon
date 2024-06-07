import classNames from "classnames";
import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    InputHTMLAttributes,
} from "react";

export default forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        ...props
    }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
    ref
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={classNames(
                "rounded-md shadow-sm",
                "border-gray-300 dark:border-gray-700",
                "dark:bg-shark-950",
                "dark:text-gray-100 focus:border-indigo-500",
                "focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",
                className
            )}
            ref={localRef}
        />
    );
});
