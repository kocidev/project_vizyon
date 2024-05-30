import { iMoviesInTheaters } from "@/types/movie.type";
import apiClient from "@/Services";

export const GetTheatersMovies = async (
    page?: number
): Promise<iMoviesInTheaters[]> => {
    try {
        const response = await apiClient.get("movie/theaters", {
            params: {
                page: page,
            },
        });
        const result: iMoviesInTheaters[] = response.data;
        return result;
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
};
