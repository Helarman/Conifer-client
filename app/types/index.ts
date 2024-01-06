export interface ImageProps {
    data: {
        id: number
        attributes: {
            name: string | null
            alternativeText: string | null
            caption: string | null
            width: 1380,
            height: 985,
            formats: {
                thumbnail: {
                    name: string
                    hash: string
                    ext: string
                    mime: string
                    path: string | null
                    width: number
                    height: number
                    size: number
                    url: string
                },
                large: {
                    name: string
                    hash: string
                    ext: string
                    mime: string
                    path: string | null
                    width: number
                    height: number
                    size: number
                    url: string
                },
                medium: {
                    name: string
                    hash: string
                    ext: string
                    mime: string
                    path: string | null
                    width: number
                    height: number
                    size: number
                    url: string
                },
                small: {
                    name: string
                    hash: string
                    ext: string
                    mime: string
                    path: string | null
                    width: number
                    height: number
                    size: number
                    url: string
                }
            },
            hash: string
            ext: string
            mime: string
            size: number
            url: string
            previewUrl: string | null,
            provider: string
            provider_metadata: string | null
            createdAt: string
            updatedAt: string
        }
    }
}

export interface PostsProps {
    id: number
    attributes: {
        title: string
        createdAt: string
        updatedAt: string
        publishedAt: string
        description: string
        image: ImageProps
        preview: ImageProps
        squarePreview: ImageProps
    }
}

export interface MetaProps {
    pagination: {
        page: number
        pageSize: number
        pageCount: number
        total: number
    }
}

export interface LinkProps {
    id: number
    label: string
    href: string
    isExternal?: boolean
}