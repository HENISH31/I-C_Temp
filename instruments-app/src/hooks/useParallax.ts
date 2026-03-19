"use client";

import { useEffect } from 'react';

export function useParallax() {
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const viewportHeight = window.innerHeight;
            const isMobile = window.innerWidth <= 768;

            // Set global scroll progress for general background effects
            document.documentElement.style.setProperty('--scroll-y', `${scrolled}px`);

            // Individual element parallax (for elements with [data-parallax])
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            parallaxElements.forEach((el) => {
                if (isMobile) {
                    // Disable complex parallax math on mobile for smoother native scroll
                    (el as HTMLElement).style.setProperty('--parallax-offset', '0px');
                    return;
                }

                const speed = parseFloat((el as HTMLElement).dataset.parallax || '0.1');
                const rect = el.getBoundingClientRect();
                const centerOffset = (rect.top + rect.height / 2) - (viewportHeight / 2);

                // Calculate an offset based on how far the element is from the center of the screen
                const offset = centerOffset * speed;
                (el as HTMLElement).style.setProperty('--parallax-offset', `${offset}px`);
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
}
