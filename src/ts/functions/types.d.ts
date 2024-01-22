export type AccordionStates = {
    opening: boolean;
    ending: boolean;
};

export type AccordionTimeout = {
    DELAY: number;
    DURATION: number;
};

export type AdjustPage = () => void;

export type HTMLSvgElement = HTMLElement & SVGElement;

export type Queue = number | undefined;

export type ScreenWidthOnlySmall = {
    SMALL: number;
};

export type ScreenWidthWithoutLarge = ScreenWidthOnlySmall & {
    MIDDLE: number;
};

export type ScreenWidth = ScreenWidthWithoutLarge & {
    LARGE: number;
};

export type SongType = keyof AccordionStates;
