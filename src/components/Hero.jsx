import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link, useNavigate } from "react-router-dom";
import 'swiper/css/effect-cards';
import Button from "../components/Button"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { EffectCards, Autoplay } from "swiper/modules";

// const sliderImgs = [
//     {
//         link: "https://raw.githubusercontent.com/codeovik/i/refs/heads/main/anime-1.jpg",
//         alt: "hero"
//     },
//     {
//         link: "https://raw.githubusercontent.com/codeovik/i/refs/heads/main/anime-2.jpg",
//         alt: "hero"
//     },
//     {
//         link: "https://raw.githubusercontent.com/codeovik/i/refs/heads/main/anime-3.jpg",
//         alt: "hero"
//     },
//     {
//         link: "https://raw.githubusercontent.com/codeovik/i/refs/heads/main/anime-4.jpg",
//         alt: "hero"
//     },
//     {
//         link: "https://raw.githubusercontent.com/codeovik/i/refs/heads/main/anime-5.jpg",
//         alt: "hero"
//     },
//     {
//         link: "https://raw.githubusercontent.com/codeovik/i/refs/heads/main/anime-6.jpg",
//         alt: "hero"
//     },
//     {
//         link: "https://raw.githubusercontent.com/codeovik/i/refs/heads/main/anime-7.jpg",
//         alt: "hero"
//     },
//     {
//         link: "https://raw.githubusercontent.com/codeovik/i/refs/heads/main/anime-8.jpg",
//         alt: "hero"
//     },
//     {
//         link: "https://raw.githubusercontent.com/codeovik/i/refs/heads/main/anime-9.jpg",
//         alt: "hero"
//     },
//     {
//         link: "https://raw.githubusercontent.com/codeovik/i/refs/heads/main/anime-10.jpg",
//         alt: "hero"
//     },
// ]

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {

    const navigate = useNavigate();

    const titleRef = useRef(null);
    const subTitleRef = useRef(null);
    const buttonRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        document.fonts.ready.then(() => {
            // animation
            gsap.from(new SplitText(titleRef.current, {
                type: "words",
            }).words, {
                x: 70,
                opacity: 0,
                stagger: 0.05,
                duration: 0.8,
                scrollTrigger: {
                    trigger: titleRef.current,
                    toggleActions: "play reverse play reverse",
                },
            })
            gsap.set(subTitleRef.current, {
                opacity: 0,
            })
            gsap.to(subTitleRef.current, {
                opacity: 1,
                delay: 0.5,
            })
            gsap.from(buttonRef.current.children, {
                opacity: 0,
                x: 20,
                delay: 0.5,
                stagger: 0.1,
                ease: "power2.out",
            });

            gsap.to(imgRef.current, {
                y: -800,
                ease: "none",
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });
    }, []);

    return (
        <header className='grid grid-cols-1 gap-5 items-center overflow-hidden rounded-2xl p-5 relative lg:aspect-10/4'>
            <img ref={imgRef} src="/hero.jpg" alt="hero" className="absolute top-0 left-0 w-full z-1 opacity-25" />
            <div className="space-y-3 z-5 w-full flex flex-col justify-center items-center">
                <h1 ref={titleRef} className="text-3xl lg:text-6xl max-w-200">Full Stack Development Service on <span className="text-primary">Freelance</span></h1>
                <p ref={subTitleRef} className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel quod alias! A, officia culpa. Mollitia soluta magni tempora et totam numquam velit ut fuga. Sunt quis sequi pariatur itaque?</p>
                <div ref={buttonRef} className='flex gap-2 flex-col md:flex-row'>
                    <div>
                        <Button onClick={() => navigate("/portfolio")}>
                            All Portfolio
                        </Button>
                    </div>
                    <div>
                        <Button onClick={() => navigate("/contact")}>
                            Let's contact
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

{/* <div ref={sliderRef} className="w-max">
    <Swiper
        effect={'cards'}
        grabCursor={true}
        speed={2000}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        modules={[EffectCards, Autoplay]}
        className="mySwiper h-100 w-100"
    >
        {sliderImgs.map((item, index) => (
            <SwiperSlide
                key={index}
                className="rounded-3xl"
            >
                <img
                    src={item.link}
                    alt={item.alt}
                />
            </SwiperSlide>
        ))}
    </Swiper>
</div> */}