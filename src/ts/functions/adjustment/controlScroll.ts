export const controlScroll = () => {
    let navOpen = false;
    let clientY: number;
    const navContent = document.getElementById("nav-content") as HTMLDivElement;

    const handleScrollPage = (e: WheelEvent) => {
        e.preventDefault();
    };

    const handleTouchMovePage = (e: TouchEvent) => {
        if (e.cancelable) {
            e.preventDefault();
        }
    };

    const getScrollStates = (content: HTMLDivElement) => {
        const scrolledToTop = (content.scrollTop as number) < 1;
        const scrolledToBottom =
            Math.abs(
                (content.scrollHeight as number) -
                    (content.clientHeight as number) -
                    (content.scrollTop as number),
            ) < 1;
        return { scrolledToTop, scrolledToBottom };
    };

    const handleScrollNavigation = (e: WheelEvent) => {
        const { scrolledToTop, scrolledToBottom } = getScrollStates(navContent);

        if (
            (scrolledToTop && (e as WheelEvent).deltaY < 0) ||
            (scrolledToBottom && (e as WheelEvent).deltaY > 0)
        ) {
            e.preventDefault();
        } else {
            e.stopPropagation();
        }
    };

    const handleTouchMoveNavigation = (e: TouchEvent) => {
        const { scrolledToTop, scrolledToBottom } = getScrollStates(navContent);

        const deltaY = clientY - e.touches[0].clientY;

        if ((scrolledToTop && deltaY < 0) || (scrolledToBottom && deltaY > 0)) {
            if (e.cancelable) {
                e.preventDefault();
            }
        } else {
            e.stopPropagation();
        }
    };

    const navButton = document.getElementById(
        "nav-button",
    ) as HTMLButtonElement;

    navButton.addEventListener("click", () => {
        navOpen = !navOpen;

        navContent.addEventListener("touchstart", (e) => {
            clientY = e.touches[0].clientY;
        });

        navContent.addEventListener("wheel", handleScrollNavigation, {
            passive: false,
        });
        navContent.addEventListener("touchmove", handleTouchMoveNavigation, {
            passive: false,
        });

        if (navOpen) {
            document.addEventListener("wheel", handleScrollPage, {
                passive: false,
            });
            document.addEventListener("touchmove", handleTouchMovePage, {
                passive: false,
            });
        } else {
            document.removeEventListener("wheel", handleScrollPage);
            document.removeEventListener("touchmove", handleTouchMovePage);
        }
    });
};
