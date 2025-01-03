import images from "app/images.json"
import { galleryItem } from "@/app/lib/galleryItem"
import Gallery from "@/app/ui/Gallery"
import Search from "../ui/Search"
import { JSX } from "react"

const imagesData: Array<galleryItem> = images.art
const description: JSX.Element = (
    <p>
        Art Instagram: <a className="underline" href="https://www.instagram.com/dannys_house_of_art/">dannys_house_of_art</a>
    </p>
)

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
        <Gallery images={filteredImagesData} description={description} title="Art" />
        </>
    )
}
