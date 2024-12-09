'use client'

import RevolvingGalleryItem from "./RevolvingGalleryItem"
import type { revolvingGalleryItem } from "../lib/galleryItem"

type galleryProps = {
    title: string
    revolvingImages: Array<revolvingGalleryItem>
}

export default function RevolvingGallery({ title, revolvingImages }: galleryProps) {
    return (
        <div className="flex flex-col mb-20">
            <h1 className="flex flex-wrap justify-start mb-5">{title}</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 justify-items-center" >
                {revolvingImages.map((item, index) => (
                    <RevolvingGalleryItem key={index} images={item.images} refreshInterval={item.refreshInterval}  />
                ))}
            </div>
        </div>
    )
}
