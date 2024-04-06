export const controlScroll = () => {
    let navOpened = false;
    let clientY: number;
    const navContent = document.getElementById("nav-content");

    const handleScrollPage = (e: WheelEvent) => {
        e.preventDefault();
    };

    const handleTouchMovePage = (e: TouchEvent) => {
        if (e.cancelable) {
            e.preventDefault();
        }
    };

    const handleScrollNavigation = (e: WheelEvent) => {
        const isScrolledToTop = (navContent?.scrollTop as number) < 1;
        const isScrolledToBottom =
            Math.abs(
                (navContent?.scrollHeight as number) -
                    (navContent?.clientHeight as number) -
                    (navContent?.scrollTop as number),
            ) < 1;

        if (
            (isScrolledToTop && (e as WheelEvent).deltaY < 0) ||
            (isScrolledToBottom && (e as WheelEvent).deltaY > 0)
        ) {
            e.preventDefault();
        } else {
            e.stopPropagation();
        }
    };

    const handleTouchMoveNavigation = (e: TouchEvent) => {
        const isScrolledToTop = (navContent?.scrollTop as number) < 1;
        const isScrolledToBottom =
            Math.abs(
                (navContent?.scrollHeight as number) -
                    (navContent?.clientHeight as number) -
                    (navContent?.scrollTop as number),
            ) < 1;

        const deltaY = clientY - e.touches[0].clientY;

        if (
            (isScrolledToTop && deltaY < 0) ||
            (isScrolledToBottom && deltaY > 0)
        ) {
            if (e.cancelable) {
                e.preventDefault();
            }
        } else {
            e.stopPropagation();
        }
    };

    document.getElementById("nav-button")?.addEventListener("click", () => {
        navOpened = !navOpened;

        navContent?.addEventListener(
            "touchstart",
            (e) => {
                clientY = e.touches[0].clientY;
            },
            false,
        );

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
        } else {
            document.removeEventListener("wheel", handleScrollPage);
            document.removeEventListener("touchmove", handleTouchMovePage);
        }
    });
};
