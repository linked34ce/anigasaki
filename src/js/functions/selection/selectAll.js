export const selectAll = () => {
    const allButton = document.getElementById('all');
    allButton.addEventListener('click', () => {
        const mainContents = document.getElementById('main-contents');
        const elements = mainContents.children;
        for (let element of elements) {
            element.classList.replace('hidden', 'shown');
        }
    });
};
