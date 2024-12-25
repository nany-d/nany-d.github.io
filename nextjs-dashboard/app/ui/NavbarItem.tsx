import Link from "next/link"

export interface NavbarItemProps {
    href: string;
    pageName: string;
    extraStyles?: string;
}

export default function NavbarItem({ href, pageName, extraStyles = "" }: NavbarItemProps) {
    return (
        <>
            <li className={`${extraStyles} p-2 hover:bg-white hover:text-black`}><Link href={href} >{pageName}</Link></li>
        </>
    )
}
