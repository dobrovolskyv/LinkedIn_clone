export type Cocktail = {
    id: string;
    content: string;
    image?: string;
    cocktail: User;
}

export type User = {
    id: string;
    name: string;
    position: string;
    image?: string;
}