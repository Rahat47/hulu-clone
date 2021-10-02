import { ArrowDownIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { Link } from "react-scroll";
import Slider from "react-slick";

const Hero = ({ trendings }) => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
    };

    return (
        <section className="text-white">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        View details about Trending Movies of this Week
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        From the latest movies and TV shows to the best of the
                        best actors and actresses, we have you covered.
                    </p>
                    <div className="flex justify-center">
                        <Link to="trending" smooth>
                            <button className="btn btn-primary group">
                                Show Movies
                                <ArrowDownIcon className="inline-block w-6 h-6 ml-2 stroke-current group-hover:animate-bounce" />
                            </button>
                        </Link>

                        <Link to="stars" smooth className="ml-10">
                            <button className="btn btn-primary group">
                                Show Stars
                                <ArrowDownIcon className="inline-block w-6 h-6 ml-2 stroke-current group-hover:animate-bounce" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Slider
                        autoplay
                        autoplaySpeed={2000}
                        arrows={false}
                        pauseOnHover={false}
                        pauseOnFocus={false}
                        {...settings}
                    >
                        {trendings.map((trending, i) => (
                            <div key={i}>
                                <Image
                                    src={`https://image.tmdb.org/t/p/original${
                                        trending.backdrop_path ||
                                        trending.poster_path
                                    }`}
                                    height={1080}
                                    width={1920}
                                    alt={trending.title || trending.name}
                                    className="rounded-lg shadow-lg relative"
                                    layout="responsive"
                                />
                                <div className="absolute bottom-0 w-full h-16 bg-black opacity-60" />
                                <h4 className="text-center text-white absolute bottom-0 left-0 mb-4 px-4 py-2">
                                    {trending.title || trending.name}
                                </h4>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Hero;
