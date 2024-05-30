export type PlatformTypes = "amazon" | "netflix" | "disney" | "apple";

export interface iPlatformContent {
    name: string;
    type: string;
    link: string;
    description: string;
    image?: string;
    video?: string;
}
