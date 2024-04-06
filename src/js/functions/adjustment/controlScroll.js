export const controlScroll = () => {
    let navOpened = false;
    let clientY;
    const navContent = document.getElementById("nav-content");
    const handleScrollPage = (e) => {
        e.preventDefault();
    };
    const handleTouchMovePage = (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
    };
    const handleScrollNavigation = (e) => {
        const isScrolledToTop = navContent?.scrollTop < 1;
        const isScrolledToBottom = Math.abs(navContent?.scrollHeight -
            navContent?.clientHeight -
            navContent?.scrollTop) < 1;
        if ((isScrolledToTop && e.deltaY < 0) ||
            (isScrolledToBottom && e.deltaY > 0)) {
            e.preventDefault();
        }
        else {
            e.stopPropagation();
        }
    };
    const handleTouchMoveNavigation = (e) => {
        const isScrolledToTop = navContent?.scrollTop < 1;
        const isScrolledToBottom = Math.abs(navContent?.scrollHeight -
            navContent?.clientHeight -
            navContent?.scrollTop) < 1;
        const deltaY = clientY - e.touches[0].clientY;
        if ((isScrolledToTop && deltaY < 0) ||
            (isScrolledToBottom && deltaY > 0)) {
            if (e.cancelable) {
                e.preventDefault();
            }
        }
        else {
            e.stopPropagation();
        }
    };
    document.getElementById("nav-button")?.addEventListener("click", () => {
        navOpened = !navOpened;
        navContent?.addEventListener("touchstart", (e) => {
            clientY = e.touches[0].clientY;
        }, false);
        navContent?.addEventListener("wheel", handleScrollNavigation, {
            passive: false,
        });
        navContent?.addEventListener("touchmove", handleTouchMoveNavigation, {
            passive: false,
        });
        if (navOpened) {
            document.addEventListener("wheel", handleScrollPage, {
                passive: false,
            });
            document.addEventListener("touchmove", handleTouchMovePage, {
                passive: false,
            });
        }
        else {
            document.removeEventListener("wheel", handleScrollPage);
            document.removeEventListener("touchmove", handleTouchMovePage);
        }
    });
};
