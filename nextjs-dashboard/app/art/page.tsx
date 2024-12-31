import images from "app/images.json"
import { galleryItem } from "@/app/lib/galleryItem"
import Gallery from "@/app/ui/Gallery"
import Search from "../ui/Search"

const imagesData: Array<galleryItem> = images.art

export default async function Page(
    props: {
        searchParams?: Promise<{
          query?: string;
        }>;
      }
) {
    const searchParams = await props.searchParams
    const filteredImagesData = imagesData.filter((item, index) => {
        // Check the name and year
        return (item.name?.toLocaleLowerCase().includes(searchParams?.query?.toLocaleLowerCase() || "")) || (item.year?.includes(searchParams?.query || ""))
    })
    console.log(filteredImagesData)
    return (
        <>
        {/* <Search /> */}
        <Gallery images={filteredImagesData} title="Art" />
        </>
    )
}
