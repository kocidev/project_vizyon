import { DataProvider } from "@/Providers/DataProvider";

export const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <DataProvider>
                <main className="dark:bg-111216 dark:text-tFFE0B5 px-4 lg:px-0">
                    {children}
                </main>
            </DataProvider>
        </>
    );
};

export default App;
