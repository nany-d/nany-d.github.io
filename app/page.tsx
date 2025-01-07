import images from "./images.json"
import RevolvingGallery from "./ui/RevolvingGallery";
import { revolvingGalleryItem } from "./lib/galleryItem";
import Link from "next/link";

const imageData:Array<revolvingGalleryItem> = images.home;

type SectionLinkProps = {
  href: string;
  title: string;
}

function SectionLink({ href, title }: SectionLinkProps) {
  return (
    <Link href={href}>
      <h2 className="text-2xl font-bold">{title}</h2>
    </Link>
)}

export default function Page() {
  return (
    <>
    <RevolvingGallery title="WELCOME" revolvingImages={imageData} />
    <SectionLink href="/puppeteer" title="The Puppeteer >" />
    <SectionLink href="/art" title="Art >" />
    </>
  );
}
