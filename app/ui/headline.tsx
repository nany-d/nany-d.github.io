'use client'

import type { galleryItem } from "../lib/galleryItem"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function Headline({ imgPath, name, year, collectionHref, gridCols, width }: galleryItem) {
    const pathName = usePathname()
    const fullImgPath = imgPath.replace("-min", "")
    const { replace } = useRouter()
    const onClick = () => {
        const params = new URLSearchParams
        params.set("name", fullImgPath)
        replace(`${pathName}?${params.toString()}`, {scroll: false})
    }
    
    return (
        <>
            {
                collectionHref ? 
                <Link href={collectionHref}>
                    <figure className={`relative flex flex-col items-left text-white mx-2.5 mb-5 col-span-1 sm:col-span-${gridCols} transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0`}>
                        <img className={`max-w-[1050px] max-h-[400px] border-black hover:border-[#777] border`} src={imgPath} height="auto"/>
                        <figcaption className={`absolute text-5xl font-bold pl-1`}>
                            {name && <p>{name}</p>}
                            {year && <p className="italic">{year}</p>}
                        </figcaption>
                    </figure>
                </Link> : 
                <button onClick={onClick}>
                    <img className={`max-w-[1050px] max-h-[500px]`} src={imgPath} height="auto"/>
                </button>
            }
        </>
    )
}
