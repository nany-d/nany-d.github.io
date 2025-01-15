import GalleryItem from "./GalleryItem"
import Modal from "./Modal"
import type { galleryItem } from "../lib/galleryItem"
import { ReactNode, Suspense } from "react"
// Gallery component to display a collection of pictures

type galleryProps = {
    title: string
    description?: ReactNode
    images: Array<galleryItem>
}

const imageDir = "images"

export default function Gallery({ title, description, images }: galleryProps) {
    return (
        <>
            <div className="flex flex-col gap-5 mb-20">
                <h1 className="flex flex-wrap justify-start mb-5 font-bold text-3xl">{title}</h1>
                {description}
                <div className="flex flex-wrap justify-center" >
                    {images.map((item, index) => (
                        <GalleryItem key={index} imgPath={`${imageDir}/${item.imgPath}`} name={item.name} year={item.year} collectionHref={item.collectionHref} gridCols={item.gridCols} width={item.width}/>
                    ))}
                </div>
            </div>
            {/* Suspense uses a fallback until loaded */}
            {/* Required when using searchParams */}
            <Suspense>
                <Modal images={images} />
            </Suspense>
        </>
    )
}
