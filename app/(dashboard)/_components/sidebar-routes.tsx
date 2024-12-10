"use client";

import { BarChart, Bitcoin, Compass, Layout, List} from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search",
    },
    {
        icon: Bitcoin,
        label: "News",
        href: "/news",
    },
]

const teacherRoutes = [
    {
        icon: List,
        label: "Courses",
        href: "/teacher/courses",
    },
    {
        icon: BarChart,
        label: "Analystics",
        href: "/teacher/analystics",
    },
    {
        icon: Bitcoin,
        label: "Post News",
        href: "/teacher/post_news",
    },
]

export const SidebarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.includes("/teacher");

    const routes = isTeacherPage ? teacherRoutes : guestRoutes;
    return (
        <div className="flex flex-col w-full">
            { routes.map((route) => (
                <SidebarItem 
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ) )}
        </div>
    )
}