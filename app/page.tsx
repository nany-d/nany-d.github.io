import images from "./images.json"
import NoviButton from "./ui/noviButton";
import Headline from "./ui/headline";
import RevolvingGallery from "./ui/RevolvingGallery";
import { galleryItem, revolvingGalleryItem } from "./lib/galleryItem";
import Link from "next/link";

const imageData:Array<revolvingGalleryItem> = images.home;
const imageDataForPhone:Array<revolvingGalleryItem> = images.homePhone;
const headlinesData:Array<galleryItem> = images.headlines;
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
      <p className={`text-3xl font-bold`}>HEADLINES</p>
      <br/>
      <div>
        {headlinesData.map((item:galleryItem, index:number) => (
          <Headline key={index} imgPath={`images/${item.imgPath}`} name={item.name} year={item.year} collectionHref={item.collectionHref} gridCols={item.gridCols} width={item.width}/>
        ))}
      </div>
      <br/>
      <SectionLink href="/art" title="Art >" />
      <SectionLink href="/videogames" title="Videogames >" />
      {/* <NoviButton/> */}
    </>
  );
}
