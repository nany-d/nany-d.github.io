import images from "app/images.json"
import { galleryItem } from "@/app/lib/galleryItem"
import Gallery from "@/app/ui/Gallery"
import { ReactNode } from "react"

const imagesData: Array<galleryItem> = images.archive
const description: ReactNode = (
    <p>
        {/* Art Instagram: <a className="underline" href="https://www.instagram.com/dannys_house_of_art/">dannys_house_of_art</a> */}
    </p>
)

export default function Page() {
    return (
        <>
            <Gallery images={imagesData} title="Archive" />
            {/* <p>
                Why I draw
                <br/>
                <br/>
                <br/>
            </p>
            <h4 className="italic">
                I draw<br/>
                Faces and the organic,<br/>
                Objects and architecture,<br/>
                Calligraphy,<br/>
                Colour,<br/>
                And abstract geometry<br/>
                <br/>
                Usually all in the same piece.<br/>
                Usually it's a mess.<br/>
                <br/>
                <br/>
                <br/>
                Sometimes I explore wider issues,<br/>
                Sometimes I'm making my own worlds,<br/>
                Sometimes my work is agressive, impusive and disturbed,<br/>
                Sometimes it's personal,<br/>
                Sometimes it's practical, calculated and technical<br/>
                <br/>
                Occasionally it's pleasant.<br/>
                Always it reflects life.<br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </h4>
            <p>
                Danny, 2020<br/>
            </p>
            <br/>
            <br/> */}
        </>
    )
}
