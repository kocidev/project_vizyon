import {
    iGetMovieVideosResponse,
} from "@/types/movie.type";
import apiClient from "@/Services";

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
