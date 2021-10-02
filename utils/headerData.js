import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";

export const headerLinks = [
    {
        name: 'Home',
        link: '/',
        Icon: HomeIcon
    },
    {
        name: "Trending",
        link: '/trending',
        Icon: LightningBoltIcon
    },
    {
        name: "Verified",
        link: '/verified',
        Icon: BadgeCheckIcon
    },
    {
        name: "Collections",
        link: '/collections',
        Icon: CollectionIcon
    },
    {
        name: "Search",
        link: '/search',
        Icon: SearchIcon
    },
    {
        name: "Profile",
        link: '/profile',
        Icon: UserIcon
    }
]