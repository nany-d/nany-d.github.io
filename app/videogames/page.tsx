import images from "app/images.json"
import { galleryItem } from "@/app/lib/galleryItem"
import Gallery from "@/app/ui/Gallery"
import { ReactNode } from "react"

const imagesData: Array<galleryItem> = images.videogames
const description: ReactNode = (
    <p>
        {/* Art Instagram: <a className="underline" href="https://www.instagram.com/dannys_house_of_art/">dannys_house_of_art</a> */}
    </p>
)

export default function Page() {
    return (
        <>
        <Gallery images={imagesData} title="Videogames" />
        </>
    )
}
