export interface IBentoCard {
    ghost: number;
    gridSize: string;
    translationKey: string;
};

export interface IBentoCardWithContent extends IBentoCard {
    tag: string;
    title: string;
    sub: string;
};