import { ThemeProvider } from "@/Providers/Theme";

export const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <ThemeProvider>
                <main className="bg-F7F2EB dark:bg-111216 dark:text-FFF2D7">
                    {children}
                </main>
            </ThemeProvider>
        </>
    );
};

export default App;
