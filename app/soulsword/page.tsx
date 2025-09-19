import images from "app/images.json"
import { galleryItem } from "@/app/lib/galleryItem"
import Gallery from "@/app/ui/Gallery"

export default async function Page() {
    return (
        <>
            <div>
                <p className={`text-3xl font-bold`}>SOUL SWORD</p>
                <br/>
                <br/>
                <p>
                    Soul Sword is an experimental videogame prototype that is in its early stages of development. Below is a little traversable demo that changes every time you reload the page!
                <br/>
                <br/>
                    FEATURES: Procedurally generated dungeon maps, hidden lands within lands, MORE TBC
                <br/>    
                    NOTE: Only works on PC
                <br/>
                <br/>
                <br/>
                </p>
            </div>
            {/* <div className="justify-items-center" >
                <iframe id="" className={`border-black hover:border-[#777] border`} src="https://dannyhausmartin.com/soul_sword/index.html" name="" width="90%" height="540"></iframe>
            </div> */}
            <div>
                <br/>
            </div>
        </>
    )
}
