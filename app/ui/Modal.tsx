'use client'

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { galleryItem } from "../lib/galleryItem";

type ModalProps = {
    images: Array<galleryItem>
}

const COMMONSTYLES = "text-4xl sm:text-6xl font-bold hover:text-[#999]"
const NEXTPREVSTYLES = "relative mx-1 sm:mx-2"

export default function Modal({ images }: ModalProps) {
    const searchParams = useSearchParams()
    const imageName = searchParams.get("name")
    const pathName = usePathname()
    const { replace } = useRouter()
    const currentIndex = images.findIndex((item) => 
        (`images/${item.imgPath.replace("-min", "")}` == searchParams.get("name"))
    )
    const onChange = (increment: number) => {
        const params = new URLSearchParams
        var newIndex: number
        if (currentIndex + increment < 0) {
            // Eg. if currentIndex = 0, increment = -1
            // newIndex is -1, which is the same as images.length-1
            newIndex = images.length + currentIndex + increment
        } else if (currentIndex + increment >= images.length) {
            // Eg. if currentIndex = images.length-1 and increment = 1
            // newIndex is images.length, which is the same as 0
            newIndex = images.length - (currentIndex + increment)
        } else {
            newIndex = currentIndex + increment
        }
        // Change URL params to the right one
        params.set("name", `images/${images[newIndex].imgPath.replace("-min", "")}`)
        replace(`${pathName}?${params.toString()}`, { scroll: false})
    }
    const onClose = () => {
        replace(pathName, { scroll: false})
    }
    return (
        <>
            {
                imageName ?
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <button onClick={() => onClose()} className={`${COMMONSTYLES} absolute top-[10px] right-[20px]`}>&times;</button>
                    <div className="flex flex-col justify-center items-center bg-black/80 max-w-[600px]">
                        <img src={imageName} className="max-h-[80vh]"/> 
                        <div className="py-1 text-center">{images[currentIndex].description}</div>
                    </div>
                    <div className="absolute bottom-[10px]">
                        <button className={`${COMMONSTYLES} ${NEXTPREVSTYLES}`} onClick={() => onChange(-1)}>&lt;</button>
                        <button className={`${COMMONSTYLES} ${NEXTPREVSTYLES}`} onClick={() => onChange(1)}>&gt;</button>
                    </div>
                </div>
                : 
                null
            }
        </>
    )
}
