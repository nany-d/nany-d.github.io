import Link from "next/link";
import Clock from "./clock";
import Navbar from "./navbar";

export default function Header() {
    return (
        <div className="flex flex-col mb-15 mt-5" >
            <div className="flex items-center justify-between min-w-screen text-white md:text-4xl font-bold mb-4 text-center tracking-wide">
                <Link href="/">DANNY HAUS MARTIN</Link>
                <Clock />
            </div>
            <Navbar />
      </div>
    )
} 
