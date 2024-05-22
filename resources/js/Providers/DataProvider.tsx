import React, { createContext } from "react";
import {
    DataContextProps,
    VizyondakiFilmlerType,
} from "@/types/DataProviderTypes";
import axios from "axios";

export const DataCtx = createContext<DataContextProps>({} as DataContextProps);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const GetVizyondakiFilmler = async (limit: number) => {
        try {
            const response = await axios.get("api/movies/theaters");
            const vizyondakiler = response.data;

            let limbo = [] as VizyondakiFilmlerType[];
            if (limit) {
                for (let index = 0; index < limit; index++) {
                    if (vizyondakiler[index]) {
                        limbo[index] = vizyondakiler[index];
                    } else {
                        break; // Limitten az film varsa döngüyü bitir
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
    };

    return <DataCtx.Provider value={value}>{children}</DataCtx.Provider>;
};
