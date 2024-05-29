import axios from "axios";
import { iMoviesInTheaters } from "@/types/movie.type";

export const GetTheatersMovies = async (
    limit?: number
): Promise<iMoviesInTheaters[]> => {
    try {
        const response = await axios.get("api/movies/theaters");
        const result: iMoviesInTheaters[] = response.data;

        if (limit !== undefined) {
            return result.slice(0, limit);
        }
        return result;
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
};
