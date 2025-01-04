import GalleryItem from "./GalleryItem"
import Modal from "./Modal"
import type { galleryItem } from "../lib/galleryItem"
import { JSX } from "react"
// Gallery component to display a collection of pictures

type galleryProps = {
    title: string
    description: JSX.Element | null
    images: Array<galleryItem>
}

const imageDir = "images"

export default function Gallery({ title, description, images }: galleryProps) {
    return (
        <>
            <div className="flex flex-col gap-5 mb-20">
                <h1 className="flex flex-wrap justify-start mb-5 font-bold text-3xl">{title}</h1>
                {description}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-1 justify-items-center" >
                    {images.map((item, index) => (
                        <GalleryItem key={index} imgPath={`${imageDir}/${item.imgPath}`} name={item.name} year={item.year} collectionHref={item.collectionHref} gridCols={item.gridCols} width={item.width}/>
                    ))}
                </div>
            </div>
        <Modal images={images} />
        </>
    )
}
