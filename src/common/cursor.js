import { gsap } from "gsap";
import variables from "../styles/scss/variables.module.scss";

export const CursorAnimation = () => {

    // cursor

    const cursor = document.querySelector('.mil-ball');
    const cursorIcon1 = cursor.querySelector('.mil-icon-1');
    const cursorMoreText = cursor.querySelector('.mil-more-text');
    const cursorChooseText = cursor.querySelector('.mil-choose-text');
    const cursorSvg = cursor.querySelector('svg');

    gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
    });

    document.addEventListener('pointermove', movecursor);

    function movecursor(e) {
        gsap.to(cursor, {
            duration: 0.6,
            ease: 'sine',
            x: e.clientX,
            y: e.clientY,
        });
    }

    const hoverElements = document.querySelectorAll('.mil-drag, .mil-more, .mil-choose');

    hoverElements.forEach((element) => {
        element.addEventListener("mouseover", (e) => {
            gsap.to(cursor, .2, {
                width: 90,
                height: 90,
                opacity: 1,
                ease: 'sine',
            });
        });
        element.addEventListener("mouseleave", (e) => {
            gsap.to(cursor, .2, {
                width: 20,
                height: 20,
                opacity: .1,
                ease: 'sine',
            });
        });
    });

    const accentElement = document.querySelectorAll('.mil-accent-cursor');

    accentElement.forEach((element) => {
        element.addEventListener("mouseover", (e) => {
            gsap.to(cursor, .2, {
                background: variables.accentColor,
                ease: 'sine',
            });
            cursor.classList.add('mil-accent');
        });
        element.addEventListener("mouseleave", (e) => {
            gsap.to(cursor, .2, {
                background: variables.darkColor,
                ease: 'sine',
            });
            cursor.classList.remove('mil-accent');
        });
    });

    const dragElement = document.querySelectorAll('.mil-drag');

    dragElement.forEach((element) => {
        element.addEventListener("mouseover", (e) => {
            gsap.to(cursorIcon1, .2, {
                scale: '1',
                ease: 'sine',
            });
        });
        element.addEventListener("mouseleave", (e) => {
            gsap.to(cursorIcon1, .2, {
                scale: '0',
                ease: 'sine',
            });
        });
    });

    const moreElement = document.querySelectorAll('.mil-more');

    moreElement.forEach((element) => {
        element.addEventListener("mouseover", (e) => {
            gsap.to(cursorMoreText, .2, {
                scale: '1',
                ease: 'sine',
            });
        });
        element.addEventListener("mouseleave", (e) => {
            gsap.to(cursorMoreText, .2, {
                scale: '0',
                ease: 'sine',
            });
        });
    });

    const chooseElement = document.querySelectorAll('.mil-choose');

    chooseElement.forEach((element) => {
        element.addEventListener("mouseover", (e) => {
            gsap.to(cursorChooseText, .2, {
                scale: '1',
                ease: 'sine',
            });
        });
        element.addEventListener("mouseleave", (e) => {
            gsap.to(cursorChooseText, .2, {
                scale: '0',
                ease: 'sine',
            });
        });
    });

    const linksElement = document.querySelectorAll('a:not(.mil-choose, .mil-more, .mil-drag, .mil-accent-cursor), input, textarea, .mil-accordion-menu');

    linksElement.forEach((element) => {
        element.addEventListener("mouseover", (e) => {
            gsap.to(cursor, .2, {
                scale: 0,
                ease: 'sine',
            });
            gsap.to(cursorSvg, .2, {
                scale: 0,
            });
        });
        element.addEventListener("mouseleave", (e) => {
            gsap.to(cursor, .2, {
                scale: 1,
                ease: 'sine',
            });
            gsap.to(cursorSvg, .2, {
                scale: 1,
            });
        });
    });
    
    const body = document.querySelector('body');

    body.addEventListener("mousedown", (e) => {
        gsap.to(cursor, .2, {
            scale: .1,
            ease: 'sine',
        });
    });
    body.addEventListener("mouseup", (e) => {
        gsap.to(cursor, .2, {
            scale: 1,
            ease: 'sine',
        });
    });
}