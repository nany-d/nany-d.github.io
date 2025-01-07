'use client'
import Link from "next/link"

// TODO: Move to central config
const NAVBARITEMS: Array<NavbarItemProps> = [
    { href: "/contact", pageName: "Contact" },
    { href: "/about", pageName: "About" },
    { href: "/archive", pageName: "Archive" },
    { href: "/art", pageName: "Art" },
    { href: "/puppeteer", pageName: "The Puppeteer" },
]

interface NavbarItemProps {
    href: string;
    pageName: string;
}

function NavbarItem({ href, pageName,}: NavbarItemProps) {
    return (
        <>
            <div>
                <Link href={href} className={`px-3 py-2 hover:bg-white hover:text-black visited:text-white block float-right`}>
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
