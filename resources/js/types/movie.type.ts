export interface iMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: string | boolean;
    vote_average: number;
    vote_count: number;
}

export interface iMovieDiscoverResponse {
    page: number;
    results: iMovie[];
    total_pages: number;
    total_results: number;
}

export interface iGetTheatersMoviesResponse extends iMovieDiscoverResponse {
    dates: {
        maximum: string;
        minimum: string;
    };
}

export interface iGetUpComingMoviesResponse extends iGetTheatersMoviesResponse {
    //
}

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
