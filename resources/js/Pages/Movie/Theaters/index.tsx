import CoreLayout from "@/Layouts/Core";
import { PageProps } from "@/types";
import { iMovie } from "@/types/movie.type";

interface TheaterProps extends PageProps {
    theaters: iMovie[];
}

const Theaters = ({ auth, theaters }: TheaterProps) => {
    return (
        <>
            <CoreLayout user={auth.user} title="Vizyondakiler">
                <h1>Merhaba</h1>
            </CoreLayout>
        </>
    );
};

export default Theaters;
