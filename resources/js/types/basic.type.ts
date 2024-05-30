import { PlatformTypes, iPlatformContent } from "./platform.type";

export type PlatformType = {
    name: PlatformTypes;
    label: string;
    contents: iPlatformContent[];
};
