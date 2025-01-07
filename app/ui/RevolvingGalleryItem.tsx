import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import type { revolvingGalleryItem } from "../lib/galleryItem"

const imageDir = "images"

const refreshImage = (images: Array<string>, imgIndex: number, setImgIndex: Dispatch<SetStateAction<number>>) => {
    if (imgIndex == images.length-1) {
        setImgIndex(0)
    } else {
        setImgIndex(imgIndex+1)
    }
}

export default function revolvingGalleryItem({ images, refreshInterval }: revolvingGalleryItem) {
    const [imgIndex, setImgIndex] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            refreshImage(images, imgIndex, setImgIndex)
        }, refreshInterval)

        return () => clearInterval(timer)
    }, [imgIndex])
    return (
        <div className="flex flex-col items-center text-white mx-2.5">
            <img src={`${imageDir}/${images[imgIndex]}`} height="auto" width="250px" />
        </div>
    )
}
