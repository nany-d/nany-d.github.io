import images from "./images.json"
import RevolvingGallery from "./ui/RevolvingGallery";
import { revolvingGalleryItem } from "./lib/galleryItem";

const imageData:Array<revolvingGalleryItem> = images.home;

export default function Page() {
  return (
    <RevolvingGallery title="WELCOME" revolvingImages={imageData} />
  );
}
