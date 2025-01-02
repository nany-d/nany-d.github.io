'use client'
import clsx from 'clsx'
import Link from "next/link"
import { usePathname } from 'next/navigation'

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
    const pathName = usePathname()
    return (
        <>
            <li className={clsx(
                `${extraStyles} p-2 hover:bg-white hover:text-black`,
                { "bg-red-900": pathName == href }

            )}>
                <Link href={href} >{pageName}</Link>
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
