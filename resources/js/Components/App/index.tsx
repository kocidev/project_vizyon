import { DataProvider } from "@/Providers/DataProvider";
import ThemeProvider from "@/Providers/ThemeProvider";

export const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <ThemeProvider>
                <DataProvider>
                    <main className="bg-F7F2EB dark:bg-111216 dark:text-FFF2D7">
                        {children}
                    </main>
                </DataProvider>
            </ThemeProvider>
        </>
    );
};

export default App;
