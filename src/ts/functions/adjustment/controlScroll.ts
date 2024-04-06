export const controlScroll = () => {
    let navOpened = false;
    const navContent = document.getElementById("nav-content");

    const handleScroll = (e: Event) => {
        e.preventDefault();
    };

    const handleScrollNavigation = (e: WheelEvent | TouchEvent) => {
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

    document.getElementById("nav-button")?.addEventListener("click", () => {
        navOpened = !navOpened;

        navContent?.addEventListener("wheel", handleScrollNavigation, {
            passive: false,
        });
        navContent?.addEventListener("touchmove", handleScrollNavigation, {
            passive: false,
        });

        if (navOpened) {
            document.addEventListener("wheel", handleScroll, {
                passive: false,
            });
            document.addEventListener("touchmove", handleScroll, {
                passive: false,
            });
        } else {
            document.removeEventListener("wheel", handleScroll);
            document.removeEventListener("touchmove", handleScroll);
        }
    });
};
