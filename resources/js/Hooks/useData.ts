import { useContext } from "react";
import { DataCtx } from "@/Providers/DataProvider";

const useData = () => {
    const dataContext = useContext(DataCtx);
    return dataContext;
};

export default useData;
