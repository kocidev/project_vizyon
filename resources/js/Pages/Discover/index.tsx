import CoreLayout from "@/Layouts/Core";
import { PageProps } from "@/types";

const Discover = ({ auth }: PageProps) => {
    return (
        <>
            <CoreLayout user={auth.user} title="Vizyondakiler" big>
                <div className="w-full h-full flex flex-col mt-20 px-2">
                    <div>
                        <h1 className="text-7xl font-extrabold tracking-wide">
                            Keşfet
                        </h1>
                    </div>
                </div>
            </CoreLayout>
        </>
    );
};
export default Discover;
