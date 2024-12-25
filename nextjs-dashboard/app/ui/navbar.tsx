import NavbarItem, { NavbarItemProps } from "./NavbarItem"

const NAVBARITEMS: Array<NavbarItemProps> = [
    { href: "/puppeteer", pageName: "The Puppeteer" },
    { href: "/art", pageName: "Art" },
    { href: "/archive", pageName: "Archive" },
    { href: "/about", pageName: "About" },
    { href: "/contact", pageName: "Contact" }

]

export default function Navbar() {
    return (
        <ul className="flex items-center text-white justify-end">
            {
                NAVBARITEMS.map((item, index) => {
                    // The last element has no right margin
                    const extraStyles = (index == NAVBARITEMS.length - 1)? "" : "mr-5"
                    return (
                        <NavbarItem href={item.href} pageName={item.pageName} extraStyles={extraStyles} />
                    ) 
                })
            }
        </ul>
    )
}
