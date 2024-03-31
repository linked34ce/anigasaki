export type AccordionStates = {
    opening: boolean;
    ending: boolean;
};

export type AccordionTimeout = {
    DELAY: number;
    DURATION: number;
};

export type AdjustPage = () => void;

export type Character =
    | "yu"
    | "ayumu"
    | "kasumi"
    | "shizuku"
    | "karin"
    | "ai"
    | "kanata"
    | "setsuna"
    | "emma"
    | "rina"
    | "shioriko"
    | "mia"
    | "lanzhu"
    | "nana"
    | "dark-shizuku"
    | "club-president"
    | "hanpen"
    | "iroha"
    | "kyoko"
    | "asagi"
    | "haruka"
    | "christina"
    | "kasane"
    | "himeno"
    | "misaki"
    | "vice-president"
    | "secretary"
    | "other";

export type HTMLSpeechElement =
    | HTMLParagraphElement
    | HTMLDivElement
    | HTMLBRElement;

export type HTMLSvgElement = HTMLElement & SVGElement;

export type Queue = number | undefined;

export type ScreenWidth = {
    SMALL: number;
    MIDDLE?: number;
    LARGE?: number;
};

export type Season = "s1" | "s2";

export type SongType = keyof AccordionStates;
