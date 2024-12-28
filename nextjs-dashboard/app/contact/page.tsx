import images from "app/images.json"
import Gallery from "@/app/ui/Gallery"
import { JSX } from "react"
import { galleryItem } from "@/app/lib/galleryItem"


const imagesData: Array<galleryItem> = images.contact
const description: JSX.Element = (
    <div>
        <p>
            Let me know your thoughts!
            <br/>
            Have you played The Puppeteer?  What did you think?
            <br/>
            Are you interested in prints, commissions or want to know more about my art?
            <br/>
            Please do get in touch.
            <br/>
        </p>
        <br/>
        <p>
            Email: <a className="underline" href="mailto:mdanny@hotmail.co.uk">mdanny@hotmail.co.uk</a>
            <br/>
            <br/>
            Twitter: <a className="underline" href="https://twitter.com/DannyHausMartin">https://twitter.com/DannyHausMartin</a>
            <br/>
            <br/>
            Art Instagram: <a className="underline" href="https://www.instagram.com/dannys_house_of_art/">dannys_house_of_art</a>
            <br/>
            <br/>
            The Puppeteer Instagram: <a className="underline" href="https://www.instagram.com/the_puppeteer_game/">the_puppeteer_game</a>
            <br/>
            <br/>
            The Puppeteer on Twitter: <a className="underline" href="https://twitter.com/the_puppet_eer">https://twitter.com/the_puppet_eer</a>
            <br/>
            <br/>
            The Puppeteer on Steam: <a className="underline" href="https://store.steampowered.com/app/2434000/The_Puppeteer/">https://steam.com/The_Puppeteer/</a>
            <br/>
            <br/>
            The Puppeteer Discord Server: <a className="underline" href="https://discord.gg/uNjXEBHzKs">https://discord.gg/uNjXEBHzKs</a>
            <br/>
            <br/>
        </p>
    </div>
)

export default function Page() {
    return (
        <Gallery title="Contact" images={imagesData} description={description} />
    )
}
