import images from "./images.json"
import RevolvingGallery from "./ui/RevolvingGallery";
import { revolvingGalleryItem } from "./lib/galleryItem";
import Link from "next/link";

const imageData:Array<revolvingGalleryItem> = images.home;
const imageDataForPhone:Array<revolvingGalleryItem> = images.homePhone;
const phoneWidth:number = 640

type SectionLinkProps = {
  href: string;
  title: string;
}

function SectionLink({ href, title }: SectionLinkProps) {
  return (
    <Link href={href} scroll={true}>
      <h2 className="text-2xl font-bold">{title}</h2>
    </Link>
)}

export default function Page() {
  return (
    <>
      <RevolvingGallery title="WELCOME" revolvingImages={imageData} revolvingImagesForPhone={imageDataForPhone} phoneWidth={phoneWidth}/>
      <SectionLink href="/art" title="Art >" />
      <SectionLink href="/puppeteer" title="The Puppeteer >" />
    </>
  );
}
