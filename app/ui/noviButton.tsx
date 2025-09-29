'use client'

 // One day this component may become an animation of Novi doing something interesting
export default function NoviButton() {
    return (
        <div>
            <br/>
            <img className={`border-black hover:border-[#777] border transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0`} src="/images/puppeteer/noviMouse.png"/>
        </div>
    )
}
