import requests from "../utils/requests";
import { useRouter } from "next/router";

const Nav = () => {
    const router = useRouter();

    return (
        <nav className="relative">
            <div className="flex items-center px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll h-20 scrollbar-hide">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2
                        className=" last:pr-24 cursor-pointer transition duration-150 transform hover:scale-125 hover:text-white active:text-red-500"
                        key={key}
                        onClick={() => router.push(`?genre=${key}`)}
                    >
                        {title}
                    </h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-20 w-1/12" />
        </nav>
    );
};

export default Nav;
