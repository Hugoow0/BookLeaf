export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "BookLeaf",
    description:
        "Search books, keep track of reading, create book lists and more!",
    navItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Search",
            href: "/search",
        },
        {
            label: "Docs",
            href: "/docs",
        },
        {
            label: "Blog",
            href: "/blog",
        },
        {
            label: "About",
            href: "/about",
        },
    ],
    navMenuItems: [
        {
            label: "Profile",
            href: "/profile",
        },
        {
            label: "Dashboard",
            href: "/dashboard",
        },
        {
            label: "Search",
            href: "/search",
        },
        {
            label: "Projects",
            href: "/projects",
        },
        {
            label: "Team",
            href: "/team",
        },
        {
            label: "Calendar",
            href: "/calendar",
        },
        {
            label: "Settings",
            href: "/settings",
        },
        {
            label: "Help & Feedback",
            href: "/help-feedback",
        },
        {
            label: "Logout",
            href: "/logout",
        },
    ],
    links: {
        github: "https://github.com/Hugoow0/BookLeaf",
        twitter: "https://twitter.com/",
        discord: "https://discord.gg/",
        sponsor: "https://patreon.com/",
    },
};
