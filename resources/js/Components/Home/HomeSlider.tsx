import { vizyondakiler } from "../../api/result.fake";

const HomeSlider = () => {
    return (
        <>
            <div>
                {vizyondakiler.map((vizyon, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div>
                            {vizyon.name} | {vizyon.rating}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default HomeSlider;
