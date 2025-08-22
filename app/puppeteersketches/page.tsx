import images from "app/images.json"
import { galleryItem } from "@/app/lib/galleryItem"
import Gallery from "@/app/ui/Gallery"

const imagesData: Array<galleryItem> = images.puppeteersketches

export default async function Page() {
    return (
        <>
        <Gallery images={imagesData} title="Puppeteer Sketches" />
        </>
    )
}
