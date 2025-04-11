import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


const ArticleContent = ({ title, image, description, slug }) => {
    const navigate = useNavigate();
    const articleRef = useRef(null);
    const [imageHeight, setImageHeight] = useState("auto");

    useEffect(() => {
        const updateImageHeight = () => {
            if (articleRef.current) {
                setImageHeight(`${articleRef.current.offsetHeight}px`);
            }
        };

        updateImageHeight();
        window.addEventListener("resize", updateImageHeight);

        return () => {
            window.removeEventListener("resize", updateImageHeight);
        };
    }, []);

    const handleReadMore = () => {
        navigate(`/artikel/${slug}`);
    };

    return (
        <main className="w-full flex flex-col md:flex-row gap-4 md:gap-10 p-4 bg-zinc-100 rounded-[32px]">
            <figure
                className="overflow-hidden rounded-xl md:rounded-2xl w-full md:w-1/2"
                style={{ height: imageHeight }}
            >
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full rounded-xl md:rounded-2xl lg:rounded-4xl"
                />
            </figure>

            <article ref={articleRef} className="w-full md:w-1/2 flex flex-col">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-4xl font-medium text-black">
                        {title}
                    </h1>

                    <section className="flex flex-col md:flex-row gap-5 mt-6 md:mt-10">
                        <div className="w-full">
                            <div className="flex gap-5 justify-between w-full">
                                <span className="self-start text-4xl md:text-8xl text-black">
                                    {description.charAt(0)}
                                </span>
                                <p className="text-sm leading-6 text-neutral-700 w-full">
                                    {description.slice(1, 108)}
                                </p>
                            </div>

                            <p className="mt-4 md:mt-6 text-sm leading-6 text-neutral-700 w-full">
                                {description.slice(108, 300)}
                            </p>
                        </div>

                        <div className="text-sm leading-6 text-neutral-700 w-full line-clamp-[8] overflow-hidden">
                            <p>{description.slice(300, 750)}</p>
                        </div>
                    </section>
                </div>

                <footer className="flex flex-wrap gap-5 md:gap-10 justify-between items-center mt-6 md:mt-8 w-full text-xs leading-none max-w-[510px]">
                    <div className="flex gap-3 items-center self-stretch my-auto text-black">
                        <span className="self-stretch my-auto">Penulis</span>
                        <div className="shrink-0 self-stretch my-auto w-0 h-3 border border-solid border-black border-opacity-70" />
                        <span className="self-stretch my-auto">4 mins read</span>
                    </div>
                    <button
                        onClick={handleReadMore}
                        className="relative overflow-hidden group px-3 py-1 my-auto text-black text-right whitespace-nowrap rounded-lg border border-black border-solid transition-all duration-500 hover:text-black"
                    >
                        <span className="relative z-10 cursor-pointer">Selengkapnya</span>
                        <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-in-out bg-yellow-200 z-0 rounded-lg md:rounded-xl lg:rounded-2xl"></span>
                    </button>
                </footer>
            </article>
        </main>
    );
};

export default ArticleContent;