import { SONG_TYPES } from './accordion/const/songTypes.js';
import { SEASONS } from './adjustment/const/episode.js';
import { CHARACTERS } from './selection/const/characters.js';

export type AccordionStates = {
  opening: boolean;
  ending: boolean;
};

export type AccordionTimeout = {
  DELAY: number;
  DURATION: number;
};

export type AdjustPage = () => void;

export type Character = (typeof CHARACTERS)[number];

export type HTMLSpeechElement =
  | HTMLParagraphElement
  | HTMLDivElement
  | HTMLBRElement;

export type HTMLSvgElement = HTMLElement & SVGElement;

export type Queue = number | undefined;

export type ScreenHeight = {
  SMALL: number;
};

export type ScreenWidth = {
  SMALL: number;
  MIDDLE?: number;
  LARGE?: number;
};

export type Season = (typeof SEASONS)[number];

export type SongType = (typeof SONG_TYPES)[number];
