export type galleryItem = {
    imgPath: string
    name: string | null
    // This can be a year range or a single year
    year: string | null
    // Links to a collection of art
    collectionHref: string | null
    gridCols: number | null
    width: number | null
}

export type revolvingGalleryItem = {
    images: Array<string>
    refreshInterval: number
}
