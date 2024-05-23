import { DataProvider } from "@/Providers/DataProvider";

export const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <DataProvider>
                <main className="bg-F7F2EB dark:bg-111216 dark:text-FFF2D7">
                    {children}
                </main>
            </DataProvider>
        </>
    );
};

export default App;
