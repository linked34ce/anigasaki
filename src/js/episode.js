import { controlPageAdjustment } from "./functions/adjustment/controlPageAdjustment.js";
import { adjustEpisodePage } from "./functions/adjustment/adjustEpisodePage.js";
import { selectCharacter } from "./functions/selection/selectCharacter.js";
import { selectSongs } from "./functions/selection/selectSongs.js";
import { selectAll } from "./functions/selection/selectAll.js";
import { controllAccordions } from "./functions/accordion/controlAccordions.js";

window.addEventListener("DOMContentLoaded", () => {
    controlPageAdjustment(adjustEpisodePage);
    selectCharacter();
    selectSongs();
    selectAll();
    controllAccordions();
});
