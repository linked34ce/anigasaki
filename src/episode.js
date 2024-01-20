import {
    adjustEpisodePage,
    controlPageAdjustment,
} from "./functions/adjustment/index.js";
import {
    selectAll,
    selectCharacter,
    selectSongs,
} from "./functions/selection/index.js";
import { controllAccordions } from "./functions/accordion/index.js";

window.addEventListener("DOMContentLoaded", () => {
    controlPageAdjustment(adjustEpisodePage);
    selectCharacter();
    selectSongs();
    selectAll();
    controllAccordions();
});
