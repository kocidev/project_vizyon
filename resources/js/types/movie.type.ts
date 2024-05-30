export interface iMoviesInTheaters {
    id: number;
    adult: boolean;
    backdrop_path: string;
    poster_path: string;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    title: string;
    video: string | boolean;
    overview: string;
    popularity: number;
    release_date: string;
    vote_average: number;
    vote_count: number;
}

export interface iGetTheatersMoviesResponse {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: iMoviesInTheaters[];
}
