import React, { createContext, useEffect, useState } from "react";
import {
    DataContextProps,
    UpComingSerieTypes,
    VizyondakiFilmlerType,
} from "@/types/DataProviderTypes";
import axios from "axios";

export const DataCtx = createContext<DataContextProps>({} as DataContextProps);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const GetVizyondakiFilmler = async (
        limit?: number
    ): Promise<VizyondakiFilmlerType[]> => {
        try {
            const response = await axios.get("api/movies/theaters");
            const result: VizyondakiFilmlerType[] = response.data;
            
            if (limit !== undefined) {
                return result.slice(0, limit);
            }
            return result;
        } catch (error) {
            console.error("Fetch error:", error);
            return [];
        }
    };

    const GetUpComingSeries = async (
        limit?: number
    ): Promise<UpComingSerieTypes[]> => {
        try {
            const response = await axios.get("api/series/upcoming");
            const result: UpComingSerieTypes[] = response.data;
            if (limit !== undefined) {
                return result.slice(0, limit);
            }
            return result;
        } catch (error) {
            console.error("Fetch error:", error);
            return [];
        }
    };

    const value = {
        GetVizyondakiFilmler,
        GetUpComingSeries,
    };

    return <DataCtx.Provider value={value}>{children}</DataCtx.Provider>;
};
