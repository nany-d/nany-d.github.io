import type { galleryItem } from "../lib/galleryItem"
import Link from "next/link"

export default function GalleryItem({ imgPath, name, year, collectionHref}: galleryItem) {
    return (
        <div className="flex flex-col items-center text-white mx-2.5 mb-5">
            <img src={imgPath} height="auto" width="250px" />
            {name && <p>{name}</p>}
            {year && <p className="italic">{year}</p>}
            {collectionHref && <Link href={collectionHref}>View Collection</Link>}
        </div>
    )
}
