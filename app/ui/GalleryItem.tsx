'use client'

import type { galleryItem } from "../lib/galleryItem"
import Link from "next/link"
import { usePathname, useSearchParams, useRouter } from "next/navigation"

export default function GalleryItem({ imgPath, name, year, collectionHref, gridCols, width }: galleryItem) {
    const pathName = usePathname()
    const fullImgPath = imgPath.replace("-min", "")
    const { replace } = useRouter()
    const onClick = () => {
        const params = new URLSearchParams
        params.set("name", fullImgPath)
        replace(`${pathName}?${params.toString()}`)
    }
    
    return (
        <div className={`flex flex-col items-center text-white mx-2.5 mb-5 border-black hover:border-[#777] border col-span-1 sm:col-span-${gridCols}`}>
            {
                collectionHref ? 
                <Link href={collectionHref}>
                    <img className={`max-w-[${width ?? 250}px] max-h-[322px]`} src={imgPath} height="auto"/>
                </Link> :    
                <button onClick={onClick}>
                    <img className={`max-w-[${width ?? 250}px] max-h-[322px]`} src={imgPath} height="auto"/>
                </button>
            }
            {name && <p>{name}</p>}
            {year && <p className="italic">{year}</p>}
        </div>
    )
}
