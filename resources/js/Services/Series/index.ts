import axios from "axios";
import { iUpComingSeries } from "@/types/serie.type";

export const GetUpComingSeries = async (
    limit?: number
): Promise<iUpComingSeries[]> => {
    try {
        const response = await axios.get("api/series/upcoming");
        const result: iUpComingSeries[] = response.data;
        if (limit !== undefined) {
            return result.slice(0, limit);
        }
        return result;
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
};
