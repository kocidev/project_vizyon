import useTheme from "@/Hooks/theme/useTheme";
import LazyLoad, { LazyLoadProps } from "react-lazyload";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface LazyLoadedImageProps extends LazyLoadProps {
    src: string | undefined;
    alt: string;
    height: number;
    imgClassName?: string;
}

const LazyLoadedImage: React.FC<LazyLoadedImageProps> = ({
    src,
    alt,
    height,
    imgClassName,
    ...lazyLoadProps
}) => {
    const { theme } = useTheme();

    return (
        <LazyLoad
            offset={100}
            placeholder={
                <>
                    <Skeleton
                        baseColor={theme == "dark" ? "#111216" : "white"}
                        highlightColor={theme == "dark" ? "black" : "#dbdbdb"}
                        height={height}
                        borderRadius={0}
                    />
                </>
            }
            {...lazyLoadProps}
        >
            <img
                src={src}
                alt={alt}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className={imgClassName}
            />
        </LazyLoad>
    );
};

export default LazyLoadedImage;
