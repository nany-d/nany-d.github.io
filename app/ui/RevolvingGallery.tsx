'use client'

import RevolvingGalleryItem from "./RevolvingGalleryItem"
import type { revolvingGalleryItem } from "../lib/galleryItem"

type galleryProps = {
    title: string
    revolvingImages: Array<revolvingGalleryItem>
    revolvingImagesForPhone: Array<revolvingGalleryItem>
    phoneWidth: number
}

function fullGallery({ title, revolvingImages }: galleryProps) {
    return (
        <div className="flex flex-col mb-20">
            <h1 className="flex flex-wrap justify-start mb-5 font-bold text-3xl">{title}</h1>
            <div className="grid grid-cols-5 gap-x-1 gap-y-5 justify-items-center" >
                {revolvingImages.map((item, index) => (
                    <RevolvingGalleryItem key={index} images={item.images} refreshInterval={item.refreshInterval}  />
                ))}
            </div>
        </div>
    )
}

export default function RevolvingGallery({ title, revolvingImages, revolvingImagesForPhone, phoneWidth }: galleryProps) {
    if (typeof window !== "undefined") {
        if (window.innerWidth < phoneWidth) {
            return (
                <div className="flex flex-col mb-20">
                    <h1 className="flex flex-wrap justify-start mb-5 font-bold text-3xl">{title}</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-1 gap-y-5 justify-items-center" >
                        {revolvingImagesForPhone.map((item, index) => (
                            <RevolvingGalleryItem key={index} images={item.images} refreshInterval={item.refreshInterval}  />
                        ))}
                    </div>
                </div>
            )
        } else {
            return fullGallery({ title, revolvingImages, revolvingImagesForPhone, phoneWidth })
        }
    } else {
        return fullGallery({ title, revolvingImages, revolvingImagesForPhone, phoneWidth })
    }
}
