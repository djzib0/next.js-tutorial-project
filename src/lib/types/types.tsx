export type LinkObject = {
    title: string;
    path: string;
}

export type PostObject = {
    userId: number;
    slug: number;
    title: string;
    body: string;
    img?: string;
    desc?: string;
    createdAt: Date;
}
