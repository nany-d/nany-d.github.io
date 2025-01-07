import images from "app/images.json"
import { JSX } from "react"
import Gallery from "@/app/ui/Gallery";
import { galleryItem } from "@/app/lib/galleryItem";

const imageData: Array<galleryItem> = images.about
const description: JSX.Element = (
    <div>
        <p>
            My name is Danny 'Haus' Martin
            <br/>
            <br/>
            I'm a creative.
            <br/>
        </p>
    </div>
)

export default function Page() {
    return (
        <>
            <Gallery images={imageData} title="About" description={description} />
            <p>
                Born: 1999
                <br/>
                From: London, UK
                <br/>
                October 2023: Released The Puppeteer on Steam
                <br/>
                October 2023: Delivered a talk at EGX entitled "The Puppeteer Demo and beginning my journey as a solo developer"
                <br/>
                July 2023: Showcased The Puppeteer at Medway Games Festival
                <br/>
                May 2023: Showcased The Puppeteer at Barclays Games Frenzy
                <br/>
                March 2023: Showcased The Puppeteer at the GDLX Expo in London
                <br/>
                March 2021: Began work on The Puppeteer
                <br/>
                June 2020: Graduated from the University of Cambridge with a BA in Architecture
                <br/>
                March 2020: 1st place in Rylands Art Prize, hosted by King's College Cambridge
                <br/>
                February 2020: 8th place in Manga Jiman Competition run by the Japanese Embassy.  Featured work: Balanced World
                <br/>
                January 2020: First solo exhibition, 'Full House', hosted by King's College Cambridge
                <br/>
                2018-2019: Head of Arts committee for King's Affair - A prestigious social event in the Cambridge calendar
                <br/>
            </p>
        </>
    )
}
