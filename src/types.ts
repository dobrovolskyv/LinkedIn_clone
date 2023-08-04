export type Cocktail = {
    id: string;
    content: string;
    image?: string;
    author: User;
}

export type User = {
    id: string;
    name: string;
    position: string;
    image?: string;
}