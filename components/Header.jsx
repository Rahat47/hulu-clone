import Image from "next/image";
import Link from "next/link";
import HeaderItem from "./HeaderItem";

import { headerLinks } from "../utils/headerData";

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row p-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                {headerLinks.map((link, index) => (
                    <HeaderItem
                        route={link.link}
                        key={index}
                        title={link.name}
                        Icon={link.Icon}
                    />
                ))}
            </div>
            <Link href="/">
                <Image
                    alt="Hulu"
                    src="https://links.papareact.com/ua6"
                    width={200}
                    height={100}
                    className="cursor-pointer object-contain"
                />
            </Link>
        </header>
    );
};

export default Header;
