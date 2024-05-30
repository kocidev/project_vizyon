import apiClient from "@/Services";
import { iPlatformContent, PlatformTypes } from "@/types/platform.type";

export const GetPlatformContent = async (
    platform: PlatformTypes
): Promise<iPlatformContent[]> => {
    try {
        const response = await apiClient.get(`platform/${platform}/content`);
        const result: iPlatformContent[] = response.data;
        return result;
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
};
