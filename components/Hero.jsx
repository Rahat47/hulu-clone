import { ArrowDownIcon } from "@heroicons/react/outline";

const Hero = ({ trending }) => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${
                    trending.backdrop_path || trending.poster_path
                })`,
            }}
        >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="text-center hero-content text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 font-bold text-4xl">
                        {trending.title || trending.name}
                    </h1>
                    <p className="mb-5">
                        {trending.overview || trending.description}
                    </p>
                    <button className="btn btn-primary group">
                        See More
                        <ArrowDownIcon className="inline-block w-6 h-6 ml-2 stroke-current group-hover:animate-bounce" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
