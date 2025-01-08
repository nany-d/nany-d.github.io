'use client'

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { galleryItem } from "../lib/galleryItem";
import path from "node:path/win32";

type ModalProps = {
    images: Array<galleryItem>
}

const COMMONSTYLES = "text-4xl font-bold hover:text-[#999]"

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
        replace(`${pathName}?${params.toString()}`)
    }
    const onClose = () => {
        replace(pathName)
    }
    return (
        <>
            {
                imageName ?
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="flex justify-center max-w-[600px] mx-2">
                        <button onClick={() => onClose()} className={`${COMMONSTYLES} absolute top-[10px] right-[20px]`}>&times;</button>
                        <button className={`${COMMONSTYLES}`} onClick={() => onChange(-1)}>&lt;</button>
                        <div className="flex flex-col items-center bg-black/80 ">
                            <img src={imageName}/> 
                            <div className="py-1">{images[currentIndex].description}</div>
                        </div>
                        <button className={`${COMMONSTYLES}`} onClick={() => onChange(1)}>&gt;</button>
                    </div>
                </div> 
                : 
                null
            }
        </>
    )
}
