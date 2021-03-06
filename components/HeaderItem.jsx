import { useRouter } from "next/router";

const HeaderItem = ({ Icon, title, route }) => {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(route)}
            className=" w-12 sm:w-20 flex flex-col items-center cursor-pointer group hover:text-white"
        >
            <Icon className="h-8 mb-1 group-hover:animate-bounce" />
            <p className=" uppercase transition-all ease-in-out opacity-0 group-hover:opacity-100 tracking-widest">
                {title}
            </p>
        </div>
    );
};

export default HeaderItem;
