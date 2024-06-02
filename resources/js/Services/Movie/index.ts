import {
    iGetUpComingMoviesResponse,
    iGetMovieVideosResponse,
} from "@/types/movie.type";
import apiClient from "@/Services";

export const GetUpComingMovies = async (
    page: number
): Promise<iGetUpComingMoviesResponse> => {
    try {
        const response = await apiClient.get("movie/upcoming", {
            params: {
                page: page,
            },
        });
        const result: iGetUpComingMoviesResponse = response.data;
        return result;
    } catch (error) {
        console.error("Fetch error:", error);
        throw new Error("Services movie error.");
    }
};

export const GetMovieVideos = async (
    movieId: number
): Promise<iGetMovieVideosResponse> => {
    try {
        const response = await apiClient.get(`movie/${movieId}/videos`);
        const result: iGetMovieVideosResponse = response.data;
        return result;
    } catch (error) {
        console.error("Fetch error:", error);
        throw new Error("Services movie error.");
    }
};
