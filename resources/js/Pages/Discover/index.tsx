import CoreLayout from "@/Layouts/Core";
import { PageProps } from "@/types";
import { FilterBar, ShowList } from "@/Pages/Discover/Partials";

const Discover = ({ auth }: PageProps) => {
    return (
        <>
            <CoreLayout user={auth.user} title="Vizyondakiler" big>
                <div className="w-full h-full flex flex-col mt-8 px-2">
                    <div className="w-full border-b pb-8 border-gray-200 dark:border-white/5">
                        <h1 className="text-7xl font-extrabold tracking-wide">
                            Keşfet
                        </h1>
                    </div>
                    <div className="flex items-start mt-8">
                        <div>
                            <FilterBar />
                        </div>
                        <div className="ml-8">
                            <ShowList />
                        </div>
                    </div>
                </div>
            </CoreLayout>
        </>
    );
};

export default Discover;
