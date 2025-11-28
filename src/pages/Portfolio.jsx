

const Portfolio = () => {
    const portfolio = [
        {
            name: "Personal Portfolio HTML TailwildCSS Template",
            img: "https://ovik-html-tailwind.vercel.app/landing-page-assets/gradient.png",
            previewLink: "https://ovik-html-tailwind.vercel.app/",
            codeLink: "https://github.com/codeovik/ovik-html-tailwind/",
        },
        {
            name: "MERN stack note taking app",
            img: "https://raw.githubusercontent.com/codeovik/my-first-mern/refs/heads/main/preview.PNG",
            previewLink: "https://ovik-html-tailwind.vercel.app/",
            codeLink: "https://github.com/codeovik/my-first-mern",
        },
    ]
    return (
        <>
            <h1 className="flex sm:text-8xl font-semibold max-w-250 mx-auto text-4xl flex-wrap justify-center items-center gap-3 md:gap-6 mb-25">
                <span>Where</span>
                <img src="/robot.jpg" alt="" className="h-10 sm:h-24 rounded-full aspect-auto" />
                <span>bold</span>
                <span>ideas</span>
                <span>take</span>
                <span>shape</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portfolio.map((item, index) => (
                    <div key={index} className="bg-[#151515] rounded-2xl p-3 flex flex-col">
                        <img src={item.img} alt={item.name} className="rounded-2xl mb-5 aspect-video object-cover" />
                        <h2 className="text-2xl font-bold mb-3">{item.name}</h2>
                        <div className="mt-auto flex gap-3">
                            <a href={item.previewLink} target="_blank" className="px-4 py-2 bg-primary text-black rounded-lg hover:bg-primary/80 transition-colors">Live Preview</a>
                            <a href={item.codeLink} target="_blank" className="px-4 py-2 bg-[#202020] rounded-lg hover:bg-[#303030] transition-colors">Source Code</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Portfolio;