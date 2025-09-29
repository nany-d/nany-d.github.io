import images from "app/images.json"
import { galleryItem } from "@/app/lib/galleryItem"
import Gallery from "@/app/ui/Gallery"

const imagesData: Array<galleryItem> = images.puppeteer

const description = (
    <div>
        <p>
            The Puppeteer is my debut video game title. It is currently available to buy on Steam!
        <br/>
        <br/>
        <a className="underline" href="https://store.steampowered.com/app/2434000/The_Puppeteer/">https://steam.com/The_Puppeteer/</a>
        <br/>
        <br/>
        "In this short yet challenging action-adventure game, traverse various lands seeking to piece together the methods and madness of The Puppeteer. Craft unique potions, topple hordes of enemies and uncover secrets rewarded by exploration."
        <br/>
        <br/>
        </p>
        <div className="justify-items-center" >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jL8HntX8vAE?si=B3w8kPb4K53euvUf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </div>
)

export default function Page() {
    return (
        <>
            <Gallery images={imagesData} title="THE PUPPETEER" description={description} />
            <p> 
                Join the Discord Server:
                    <a className="underline" href="https://discord.gg/uNjXEBHzKs">https://discord.gg/uNjXEBHzKs</a>
                    <br/>
                {/* <br/>
                Twitter: <a className="underline" href="https://twitter.com/the_puppet_eer">https://twitter.com/the_puppet_eer</a>
                <br/>
                <br/>
                Instagram: <a className="underline" href="https://www.instagram.com/the_puppeteer_game/">the_puppeteer_game</a>
                <br/> */}
            </p>
        </>
    )
}
