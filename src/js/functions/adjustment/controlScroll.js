export const controlScroll = () => {
    let navOpen = false;
    let clientY;
    const navContent = document.getElementById('nav-content');
    const handleScrollPage = (e) => {
        e.preventDefault();
    };
    const handleTouchMovePage = (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
    };
    const getScrollStates = (content) => {
        const scrolledToTop = content.scrollTop < 1;
        const scrolledToBottom = Math.abs(content.scrollHeight -
            content.clientHeight -
            content.scrollTop) < 1;
        return { scrolledToTop, scrolledToBottom };
    };
    const handleScrollNavigation = (e) => {
        const { scrolledToTop, scrolledToBottom } = getScrollStates(navContent);
        if ((scrolledToTop && e.deltaY < 0) ||
            (scrolledToBottom && e.deltaY > 0)) {
            e.preventDefault();
        }
        else {
            e.stopPropagation();
        }
    };
    const handleTouchMoveNavigation = (e) => {
        const { scrolledToTop, scrolledToBottom } = getScrollStates(navContent);
        const deltaY = clientY - e.touches[0].clientY;
        if ((scrolledToTop && deltaY < 0) || (scrolledToBottom && deltaY > 0)) {
            if (e.cancelable) {
                e.preventDefault();
            }
        }
        else {
            e.stopPropagation();
        }
    };
    const navButton = document.getElementById('nav-button');
    navButton.addEventListener('click', () => {
        navOpen = !navOpen;
        navContent.addEventListener('touchstart', (e) => {
            clientY = e.touches[0].clientY;
        });
        navContent.addEventListener('wheel', handleScrollNavigation, {
            passive: false,
        });
        navContent.addEventListener('touchmove', handleTouchMoveNavigation, {
            passive: false,
        });
        if (navOpen) {
            document.addEventListener('wheel', handleScrollPage, {
                passive: false,
            });
            document.addEventListener('touchmove', handleTouchMovePage, {
                passive: false,
            });
        }
        else {
            document.removeEventListener('wheel', handleScrollPage);
            document.removeEventListener('touchmove', handleTouchMovePage);
        }
    });
};
