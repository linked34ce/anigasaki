import { controlPageAdjustment } from "./functions/adjustment/controlPageAdjustment";
import { adjustEpisodePage } from "./functions/adjustment/adjustEpisodePage";
import { selectCharacter } from "./functions/selection/selectCharacter";
import { selectSongs } from "./functions/selection/selectSongs";
import { selectAll } from "./functions/selection/selectAll";
import { controllAccordions } from "./functions/accordion/controlAccordions";

window.addEventListener("DOMContentLoaded", () => {
    controlPageAdjustment(adjustEpisodePage);
    selectCharacter();
    selectSongs();
    selectAll();
    controllAccordions();
});
