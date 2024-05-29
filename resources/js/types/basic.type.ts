export type PlatformType = {
    name: string;
    label: string;
    contents: {
        name: string;
        type: string;
        link: string;
        image: string;
        description: string;
    }[];
};