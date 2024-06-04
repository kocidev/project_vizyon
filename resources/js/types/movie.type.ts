import { iMovie } from "@/types";

export interface iMovieDiscoverResponse {
    page: number;
    results: iMovie[];
    total_pages: number;
    total_results: number;
}

export type iGetMovieTheatersResponse = iMovie[];
export type iGetMovieUpComingsResponse = iGetMovieTheatersResponse;
export type iGetMoviePopularResponse = iGetMovieTheatersResponse;

export type iGetMovieVideosResponse = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: number;
}[];
