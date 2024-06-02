import CoreLayout from "@/Layouts/Core";
import { PageProps } from "@/types";

const Theaters = ({ auth }: PageProps) => {
    return (
        <>
            <CoreLayout user={auth.user} title="Vizyondakiler">
                <h1>Merhaba</h1>
            </CoreLayout>
        </>
    );
};

export default Theaters;
