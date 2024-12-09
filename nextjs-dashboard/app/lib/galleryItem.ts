export type galleryItem = {
    imgPath: string
    name: string | null
    // This can be a year range or a single year
    year: string | null
}

export type revolvingGalleryItem = {
    images: Array<string>
    refreshInterval: number
}
