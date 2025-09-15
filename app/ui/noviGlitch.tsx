"use client"

import gsap from "gsap"
import { useEffect } from "react"

const CustomCursor = () => {
    useEffect(() => {
        const cursorCustom = document.querySelector('.cursorCustom') as HTMLDivElement | null;

        const moveCursor = (e: MouseEvent): void => {
            gsap.to(cursorCustom, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            });
        };

        gsap.set(cursorCustom, {
            xPercent: -50,
            yPercent: -50
        });

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div className="max-sm:hidden z-10">
            <div className="cursorCustom fixed z-50 mix-blend-difference pointer-events-none">
                <img src="images/puppeteer/noviMouse.png"></img>
            </div>
        </div>
    );
}

// const CustomCursor = () => {
//     useEffect(() => {
//         const sprite = document.querySelector('.sprite-sheet') as Element | null;

//         gsap.to(sprite, {
//             backgroundPositionX: -2112,
//             duration: 4, // The total duration of the animation in seconds
//             ease: `steps(${40})`,
//             repeat: -1 // Repeat indefinitely
//         });

//         return () => {
//         };
//     }, []);

//     return (
//         <div className="sprite-container">
//             <div className="sprite-sheet"></div>
//         </div>
//     );
// }

export default CustomCursor;
