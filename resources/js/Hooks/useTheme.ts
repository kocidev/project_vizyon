import { useContext } from "react";
import { ThemeContext } from "@/Providers/ThemeProvider";

const useTheme = () => {
    return useContext(ThemeContext);
};

export default useTheme;
