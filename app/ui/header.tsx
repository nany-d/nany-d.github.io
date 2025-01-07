import Link from "next/link";
import Clock from "./clock";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <div className="flex flex-col mb-15 mt-5" >
            <div className="flex sm:items-center justify-between min-w-screen text-white text-4xl sm:text-4xl font-bold mb-4 text-center tracking-wide">
                <Link href="/" className="text-left">DANNY HAUS MARTIN</Link>
                <Clock />
            </div>
            <Navbar />
      </div>
    )
} 
