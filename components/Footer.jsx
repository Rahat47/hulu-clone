import { LightBulbIcon } from "@heroicons/react/outline";
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="items-center p-4 footer bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col">
                <LightBulbIcon className="w-10 h-10 fill-current" />
                <p>Copyright © 2021 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-content hover:text-neutral-content-hover transition-all hover:text-blue-700"
                >
                    <FaFacebookSquare className=" w-6 h-6 fill-current" />
                </a>
                <a
                    href="https://www.github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-content hover:text-neutral-content-hover transition-all hover:text-gray-900"
                >
                    <FaGithubSquare className=" w-6 h-6 fill-current" />
                </a>
                <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-content hover:text-neutral-content-hover transition-all hover:text-blue-500"
                >
                    <FaTwitterSquare className=" w-6 h-6 fill-current" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
