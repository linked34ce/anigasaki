export type AccordionStates = {
    opening: boolean;
    ending: boolean;
};

export type AccordionTimeout = {
    DELAY: number;
    DURATION: number;
};

export type HTMLSvgElement = HTMLElement & SVGElement;

export type SongType = keyof AccordionStates;
