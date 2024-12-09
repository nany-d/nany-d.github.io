import images from "../app/images.json"
import { Layout } from "@/app/layout"
import { galleryItem } from "@/app/lib/galleryItem"
import Gallery from "@/app/ui/Gallery"

const imagesData: Array<galleryItem> = images.archive

export default function Art() {
    return (
        <Layout>
            <Gallery images={imagesData} title="Archive" />
        </Layout>
    )
}
