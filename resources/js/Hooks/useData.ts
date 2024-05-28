import { useContext } from "react";
import { DataCtx } from "@/Providers/DataProvider";

const useData = () => {
    return useContext(DataCtx);
};

export default useData;
