'use client'

import Link from "next/link"

const NAVBARITEMS: Array<NavbarItemProps> = [
    { href: "/contact", pageName: "Contact" },
    { href: "/about", pageName: "About" },
    { href: "/videogames", pageName: "Videogames" },
    { href: "/art", pageName: "Art" },
]

interface NavbarItemProps {
    href: string;
    pageName: string;
}

function NavbarItem({ href, pageName,}: NavbarItemProps) {
    return (
        <>
            <div>
                <Link href={href} className="px-3 py-2 hover:bg-white hover:text-black visited:text-white block float-right">
                    {pageName}
                </Link>
            </div>
        </>
    )
}

export default function Navbar() {
    return (
        <div className="mb-20 overflow-hidden">
            {
                NAVBARITEMS.map((item, index) => {
                    return (
                        <NavbarItem key={item.href} href={item.href} pageName={item.pageName}/>
                    ) 
                })
            }
        </div>
    )
}
