import type { ScreenWidth, ScreenHeight } from "../../types.js";

export const WINDOW_HEIGHT_FOR_NAV = {
    SMALL: 605,
} as const satisfies ScreenHeight;

export const WINDOW_WIDTH_FOR_NAV = {
    SMALL: 370,
    MIDDLE: 570,
} as const satisfies ScreenWidth;

export const NUM_OF_ITEMS_PER_ROW = {
    SMALL: 2,
    MIDDLE: 3,
    LARGE: 5,
} as const satisfies ScreenWidth;
