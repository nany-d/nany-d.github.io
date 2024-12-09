import images from "./images.json"
import RevolvingGallery from "./ui/RevolvingGallery";
import { Layout } from "./layout";
import { revolvingGalleryItem } from "./lib/galleryItem";

const imageData:Array<revolvingGalleryItem> = images.home;

export default function Page() {
  return (
    <Layout>
      <RevolvingGallery title="WELCOME" revolvingImages={imageData} />
    </Layout>  
  );
}
