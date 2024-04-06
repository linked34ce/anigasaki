export const selectSongs = () => {
    const songsButton = document.getElementById('songs');
    songsButton.addEventListener('click', () => {
        const mainContents = document.getElementById('main-contents');
        const elements = mainContents.children;
        for (let element of elements) {
            if (element.classList.contains('song') ||
                element.classList.contains('lyric')) {
                element.classList.replace('hidden', 'shown');
            }
            else {
                element.classList.replace('shown', 'hidden');
            }
        }
    });
};
