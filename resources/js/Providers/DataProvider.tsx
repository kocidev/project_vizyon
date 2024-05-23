import React, { createContext, useEffect, useState } from "react";
import {
    DataContextProps,
    VizyondakiFilmlerType,
} from "@/types/DataProviderTypes";
import axios from "axios";

export const DataCtx = createContext<DataContextProps>({} as DataContextProps);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDark]);

    const GetVizyondakiFilmler = async (limit?: number) => {
        try {
            const response = await axios.get("api/movies/theaters");
            const vizyondakiler = response.data;

            let limbo = [] as VizyondakiFilmlerType[];
            if (limit) {
                for (let index = 0; index < limit; index++) {
                    if (vizyondakiler[index]) {
                        limbo[index] = vizyondakiler[index];
                    } else {
                        break;
                    }
                }
            } else {
                limbo = vizyondakiler;
            }
            return limbo;
        } catch (error) {
            console.error("Fetch error:", error);
            return [] as VizyondakiFilmlerType[];
        }
    };

    const value = {
        GetVizyondakiFilmler,
        isDark,
        setIsDark,
    };

    return <DataCtx.Provider value={value}>{children}</DataCtx.Provider>;
};
