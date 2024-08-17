"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/lib/enums";


const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${link.path === pathname && "text-accent border-b-2 border-accent" 
                        } font-medium capitalize hover:text-accent transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    )
}

export default Nav