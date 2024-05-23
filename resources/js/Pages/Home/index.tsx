import { PageProps } from "@/types";
import MainLayout from "@/Layouts/MainLayout";
import Theaters from "./Partials/Theaters";

export default function Home({ auth }: PageProps) {
    return (
        <>
            <MainLayout user={auth.user}>
                <div>
                    <Theaters />
                </div>
            </MainLayout>
        </>
    );
}
