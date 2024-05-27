import { PageProps } from "@/types";
import MainLayout from "@/Layouts/MainLayout";
import Theaters from "./Partials/Theaters";
import LatestSeriesTrailers from "./Partials/LatestSeriesTrailers";
import SearchDiv from "./Partials/SearchDiv";
import "./index.css";

export default function Home({ auth }: PageProps) {
    return (
        <>
            <MainLayout user={auth.user} title="Home">
                <SearchDiv />
                <div className="mt-2">
                    <Theaters />
                </div>
                <div className="mt-2">
                    <LatestSeriesTrailers />
                </div>
            </MainLayout>
        </>
    );
}
