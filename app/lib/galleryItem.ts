export type galleryItem = {
    imgPath: string
    name?: string
    description?: string
    // This can be a year range or a single year
    year?: string
    // Links to a collection of art
    collectionHref?: string
    gridCols?: number
    width?: number
}

export type revolvingGalleryItem = {
    images: Array<string>
    refreshInterval: number
}
