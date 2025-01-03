'use client'
import clsx from 'clsx'
import Link from "next/link"

// TODO: Move to central config
const NAVBARITEMS: Array<NavbarItemProps> = [
    { href: "/puppeteer", pageName: "The Puppeteer" },
    { href: "/art", pageName: "Art" },
    { href: "/archive", pageName: "Archive" },
    { href: "/about", pageName: "About" },
    { href: "/contact", pageName: "Contact" }

]

interface NavbarItemProps {
    href: string;
    pageName: string;
    extraStyles?: string;
}

function NavbarItem({ href, pageName, extraStyles = "" }: NavbarItemProps) {
    return (
        <>
            <li>
                <Link href={href} className={`${extraStyles} p-2 hover:bg-white hover:text-black visited:text-white`}>
                    {pageName}
                </Link>
            </li>
        </>
    )
}

export default function Navbar() {
    return (
        <ul className="flex items-center text-white justify-end">
            {
                NAVBARITEMS.map((item, index) => {
                    // The last element has no right margin
                    const extraStyles = (index == NAVBARITEMS.length - 1)? "" : "mr-5"
                    return (
                        <NavbarItem key={item.href} href={item.href} pageName={item.pageName} extraStyles={extraStyles} />
                    ) 
                })
            }
        </ul>
    )
}
