import Link from "next/link"

export default function Navbar() {
    return (
        <ul className="flex items-center text-white justify-end">
            <li className="mr-5 p-2 hover:bg-white hover:text-black"><Link href="/puppeteer" >The Puppeteer</Link></li>
            <li className="mr-5 p-2 hover:bg-white hover:text-black"><Link href="/art">Art</Link></li>
            <li className="mr-5 p-2 hover:bg-white hover:text-black"><Link href="/archive">Archive</Link></li>
            <li className="mr-5 p-2 hover:bg-white hover:text-black"><Link href="/about">About</Link></li>
            <li className="p-2 hover:bg-white hover:text-black"><Link href="/contact">Contact</Link></li>
        </ul>
    )
}
