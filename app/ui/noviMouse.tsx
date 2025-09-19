"use client"

import gsap from "gsap"
import { useEffect } from "react"

export default function NoviMouse() {
    useEffect(() => {
        const spriteContainer = document.querySelector('.noviMouse') as HTMLDivElement | null;

        const moveCursor = (e: MouseEvent): void => {
            gsap.to(spriteContainer, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            });
        };

        gsap.set(spriteContainer, {
            xPercent: -50,
            yPercent: -50
        });

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div className="max-sm:hidden">
            <img className="noviMouse fixed z-50 mix-blend-difference pointer-events-none" src="/images/puppeteer/noviMouse.png"></img>
        </div>
    );
}
