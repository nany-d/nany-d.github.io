"use client"

import gsap from "gsap"
import { useEffect } from "react"

const CustomCursor = () => {
    useEffect(() => {
        const spriteContainer = document.querySelector('.sprite-container') as HTMLDivElement | null;
        // const sprite = document.querySelector('.sprite-sheet') as Element | null;

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

        // gsap.to(sprite, {
        //     backgroundPositionX: -384,
        //     duration: 1, // The total duration of the animation in seconds
        //     ease: `steps(${6})`,
        //     repeat: -1 // Repeat indefinitely
        // });

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div className="sprite-container max-sm:hidden fixed z-50 mix-blend-difference pointer-events-none">
            <div className="sprite-sheet"></div>
        </div>
    );
}

export default CustomCursor;
