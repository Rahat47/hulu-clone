import { AiTwotoneStar } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import Image from "next/image";

const TrendingPeople = ({ star, peoples }) => {
    return (
        <>
            <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white  mx-6 lg:mx-0">
                    <div className="p-4 md:p-12 text-center lg:text-left">
                        <div
                            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(http://image.tmdb.org/t/p/original${star.profile_path})`,
                            }}
                        />
                        <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-black">
                            {star.name}
                        </h1>
                        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
                        <p className="pt-4 text-green-600 font-bold flex items-center justify-center lg:justify-start">
                            <BsFillBriefcaseFill className="h-10 w-10 fill-current text-green-700 pr-4" />
                            {star.known_for_department}
                        </p>
                        <p className="pt-2 text-green-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                            <AiTwotoneStar className="h-10 w-10 fill-current text-green-700 pr-4" />
                            Star Rating - {star.popularity}
                        </p>

                        {/* Use https://simpleicons.org/ to find the svg for your preferred product */}
                    </div>
                </div>
                <div className="w-full lg:w-2/5 hidden lg:block">
                    <Image
                        src={`http://image.tmdb.org/t/p/original${star.profile_path}`}
                        className="rounded-none lg:rounded-lg shadow-2xl lg:block  "
                        width={400}
                        height={500}
                        layout="responsive"
                    />
                </div>
            </div>

            <section className="text-white body-font cursor-pointer">
                <div className="container px-5 pb-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                            Trending People Of This Week
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Top 20 Trending People of the Week, With Their
                            Photos and Ratings
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2 lg:grid-cols-3">
                        {peoples.map(people => (
                            <div key={people.id}>
                                <div className="flex relative">
                                    <img
                                        alt={people.name}
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src={`http://image.tmdb.org/t/p/original${people.profile_path}`}
                                        height={1080}
                                        width={1920}
                                    />
                                    <div className="px-8 py-16 h-96 relative z-10 w-full transition-all duration-300 border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                            {people.known_for_department}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            {people.name}
                                        </h1>
                                        <p className="leading-relaxed text-primary">
                                            {people.name} is a{" "}
                                            {people.popularity} rated star
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TrendingPeople;
