export type VizyondakiFilmlerType = {
    type: string;
    summary: string;
    name: string;
    duration: string;
    rating: string;
    image: string;
};

export type DataContextProps = {
    GetVizyondakiFilmler: (limit?: number) => Promise<VizyondakiFilmlerType[]>;
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};
