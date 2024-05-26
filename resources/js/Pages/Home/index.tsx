import { PageProps } from "@/types";
import MainLayout from "@/Layouts/MainLayout";
import Theaters from "./Partials/Theaters";
import LatestSeriesTrailers from "./Partials/LatestSeriesTrailers";

export default function Home({ auth }: PageProps) {
    return (
        <>
            <MainLayout user={auth.user} title="Home">
                <div>
                    <Theaters />
                </div>
                <div className="my-2">
                    <LatestSeriesTrailers />
                </div>
            </MainLayout>
        </>
    );
}
