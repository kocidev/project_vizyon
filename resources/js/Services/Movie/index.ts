import {
    iGetTheatersMoviesResponse,
    iMoviesInTheaters,
} from "@/types/movie.type";
import apiClient from "@/Services";

export const GetTheatersMovies = async (
    page: number
): Promise<iGetTheatersMoviesResponse> => {
    try {
        const response = await apiClient.get("movie/theaters", {
            params: {
                page: page,
            },
        });
        const result: iGetTheatersMoviesResponse = response.data;
        return result;
    } catch (error) {
        console.error("Fetch error:", error);
        return {} as iGetTheatersMoviesResponse;
    }
};
