import type { ScreenWidth } from "../../types.js";

export const NAV_HEIGHT = {
    SMALL: 605,
    MIDDLE: 790,
} as const satisfies ScreenWidth;

export const NAV_WIDTH = {
    SMALL: 370,
    MIDDLE: 570,
} as const satisfies ScreenWidth;

export const NUM_OF_ITEMS_PER_ROW = {
    SMALL: 2,
    MIDDLE: 3,
    LARGE: 5,
} as const satisfies ScreenWidth;
