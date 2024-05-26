export type VizyondakiFilmlerType = {
    type: string;
    summary: string;
    name: string;
    duration: string;
    rating: string;
    image: string;
};

export type UpComingSerieTypes = {
    name: string;
    meta: {
        [key: string]: any;
        season: string;
        link: string;
        image: string;
    };
};

export type DataContextProps = {
    GetVizyondakiFilmler: (limit?: number) => Promise<VizyondakiFilmlerType[]>;
    GetUpComingSeries: (limit?: number) => Promise<UpComingSerieTypes[]>;
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};
