# Danny Haus Martin Art Website

- [Danny Haus Martin Art Website](#danny-haus-martin-art-website)
  - [Setup](#setup)
  - [Example Changes](#example-changes)
    - [Adding a New Image](#adding-a-new-image)
    - [Adding a New Page](#adding-a-new-page)
    - [Adding a New Nav Section](#adding-a-new-nav-section)
  - [Frameworks](#frameworks)
    - [NextJS](#nextjs)
    - [TailwindCSS](#tailwindcss)


This repo contains the frontend for [DannyHausMartin](https://www.dannyhausmartin.com), a personal art website.

It has been built using Typescript, React, [NextJS](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/). 

## Setup 

To set up the repo for development, follow the below steps.

1. Install NodeJS (Javascript runtime), following the instructions [here](https://nodejs.org/en/download).
2. Install pnpm globally across projects, a more efficient package manager than NodeJS
```
npm i -g pnpm
```
3. Install the dependencies for this project
```
pnpm i
```
4. Check if the frontend can be built and hosted locally
```
pnpm dev
```
5. Explore the website at port 3000 by navigating to `http://localhost:3000`

## Example Changes

### Adding a New Image

Pages containing images use the Gallery component, which given an array of image data, render multiple GalleryItem components. These are the props a GalleryItem uses:
```ts
export type galleryItem = {
  imgPath: string
  name: string | null
  description: string | null
  // This can be a year range or a single year
  year: string | null
  // Links to a collection of art
  collectionHref: string | null
  gridCols: number | null
  width: number | null
}
```
Note that the description is what is shown when the item is clicked on and viewed as a modal, whilst the name is what appears under the image when not in the modal. The collectionHref is used when clicking on a picture links to another page, instead of opening a modal with the full size image.

All images are stored in the public/images folder. The website is driven by `images.json` in the app directory. To add a new image, simply add the details of the new image into the JSON, under the page we want to add it to. For example:
```json
"art": [
  { "imgPath": "art-pages/close to you.jpg", "name": "Pastels", "year": "2020", "collectionHref": "/pastels"},
  { "imgPath": "art-pages/example_piece.jpg", "name": "Example Piece", "year": "2024", "collectionHref": "/example_pieces"},
  ...
]
```
This example adds the piece saved in `public/images/art-pages/example_piece.jpg` to the /art page, and links to another page at `/example_pieces`.

Here is an example of adding an image which should open a modal:
```json
"pastels": [
  {"imgPath": "pastels/There can only be one rose-min.jpg", "name": "There can only be one rose", "description": "There can only be one rose, 60 x 85cm soft pastel on paper", "gridCols": 2, "width": 520},
  {"imgPath": "pastels/example.jpg", "name": "Example", "description": "Heart's City, 28 x 36cm soft pastel on paper"},
  ...
]
```
Because we don't provide a collectionHref, the image when clicked on opens a modal and shows the provided description.


### Adding a New Page

NextJS makes it simple to add pages that follow a consistent layout. The `app` folder contains all of the pages and UI components. The `layout.tsx` is where the common layout between all pages is shared. The `page.tsx` contains the page for the homepage of the website, excluding things included in the common layout like the Navbar and Footer.

Other pages are stored in directories. For example, the React code for `/art` is stored in the art folder, and NextJS automatically handles the routing to this page. If we wanted to add a new page at `/example` which follows the same Gallery layout:

1. In `images.json`, add a new key for this page, along with adding in the images.
```json
"sketches": [
  ...
],
"example": [
  {"imgPath": ..., "name": ..., "description": ...},
  {"imgPath": ..., "name": ..., "description": ...},
  {"imgPath": ..., "name": ..., "description": ...},
]
```
2. Create a new directory named example in the `app` folder.
3. In this folder, create a new file called `page.tsx`
4. Copy and paste an existing `page.tsx`, such as the one from sketches and update the field from the JSON
```ts
// file is app/example/page.tsx
import images from "app/images.json"
import { galleryItem } from "@/app/lib/galleryItem"
import Gallery from "@/app/ui/Gallery"

// CHANGED TO GET EXAMPLE
const imagesData: Array<galleryItem> = images.example

export default async function Page() {
    return (
        <>
        <Gallery images={imagesData} title="Example" />
        </>
    )
}
```
5. Check that the page is as expected at `/example`.

### Adding a New Nav Section

Currently the Navbar is saved in `app/ui/Navbar.tsx`. It contains the React component for the Navbar items, along with the full Navbar. Each Navbar item should have a href it points to, and a name. These are set in the `NAVBARITEMS`. To add a new navbar section, add it to the array.

```ts
const NAVBARITEMS: Array<NavbarItemProps> = [
  { href: "/contact", pageName: "Contact" },
  { href: "/about", pageName: "About" },
  { href: "/archive", pageName: "Archive" },
  { href: "/art", pageName: "Art" },
  { href: "/puppeteer", pageName: "The Puppeteer" },
  { href: "/newnav", pageName: "New Nav Section"}
]
```

## Frameworks

### NextJS

### TailwindCSS
