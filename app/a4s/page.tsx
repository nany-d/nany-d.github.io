import images from "app/images.json"
import { galleryItem } from "@/app/lib/galleryItem"
import Gallery from "@/app/ui/Gallery"

const imagesData: Array<galleryItem> = images.a4s

export default async function Page() {
    return (
        <>
        <Gallery images={imagesData} title="A4s" />
        </>
    )
}
