import { useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(CustomEase, SplitText);

export default function Button({ children, onClick }) {
    const textRef = useRef(null);

    useEffect(() => {
        const el = textRef.current;

        // Split text into characters
        const split = new SplitText(el, { type: "words" });

        // Custom ease
        CustomEase.create("customEase", "0.65, 0.05, 0, 1");

        // GSAP timeline
        const tl = gsap.timeline({ paused: true });
        tl.to(split.words, {
            y: "-1.25em",
            duration: 0.5,
            stagger: 0.05,
            ease: "customEase",
        });

        const parent = el.closest("button");

        const enter = () => tl.play();
        const leave = () => tl.reverse();

        parent.addEventListener("mouseenter", enter);
        parent.addEventListener("mouseleave", leave);

        return () => {
            parent.removeEventListener("mouseenter", enter);
            parent.removeEventListener("mouseleave", leave);
        };
    }, []);

    return (
        <button
            onClick={onClick}
            className="cursor-pointer bg-primary hover:bg-secondary transition-all group duration-500 rounded-full px-6 py-2"
        >
            <span className="overflow-hidden flex gap-1">
                <span
                    ref={textRef}
                    className="[text-shadow:0px_1.25em_currentColor] text-lg font-medium text-constant"
                >
                    {children}
                </span>
                <span className="overflow-hidden relative mt-0.5">
                    <svg className="scale-80 transition-all transform delay-200 duration-200 ease-in group-hover:translate-x-4.5 group-hover:-translate-y-4.5" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M670.91-611.74 251.85-192.17q-12.18 12.67-29.83 12.42t-30.32-12.92q-12.68-12.68-12.68-29.83t12.68-29.83l419.06-419.56H393.91q-17.65 0-30.32-12.68-12.68-12.67-12.68-30.32t12.68-30.33q12.67-12.67 30.32-12.67h320q17.66 0 30.33 12.67 12.67 12.68 12.67 30.33v320q0 17.65-12.67 30.32-12.67 12.68-30.33 12.68-17.65 0-30.32-12.68-12.68-12.67-12.68-30.32v-216.85Z"/></svg>
                    <svg className="scale-80 transition-all transform delay-200 duration-200 ease-out -translate-x-4.5 group-hover:translate-x-0 group-hover:-translate-y-6 translate-y-0 absolute" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M670.91-611.74 251.85-192.17q-12.18 12.67-29.83 12.42t-30.32-12.92q-12.68-12.68-12.68-29.83t12.68-29.83l419.06-419.56H393.91q-17.65 0-30.32-12.68-12.68-12.67-12.68-30.32t12.68-30.33q12.67-12.67 30.32-12.67h320q17.66 0 30.33 12.67 12.67 12.68 12.67 30.33v320q0 17.65-12.67 30.32-12.67 12.68-30.33 12.68-17.65 0-30.32-12.68-12.68-12.67-12.68-30.32v-216.85Z"/></svg>
                </span>
            </span>
        </button>
    );
}