const About = () => {
    return (
        <>
            <h1 className="flex sm:text-8xl font-semibold max-w-250 mx-auto text-4xl flex-wrap justify-center items-center gap-3 md:gap-6 mb-25">
                <span>All</span>
                <span>about</span>
                <img src="/robot.jpg" alt="" className="h-10 sm:h-24 rounded-full aspect-auto" />
                <span>the</span>
                <span>codeovik</span>
            </h1>
            {/* CEO image and message on agency */}
            <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] bg-[#101010] p-5 rounded-2xl">
                <div className="flex gap-2 items-center">
                    <img src="/ovik.jpg" alt="ovik biswas" className="rounded-full h-30 aspect-square" />
                    <div className="">
                        <h4 className="text-2xl">Ovik Biswas</h4>
                    <p className="">CEO, <a href="/" className="after:w-full after:h-0.5 after:bg-white after:absolute relative after:rounded-full after:left-0 after:bottom-0 hover:after:w-0 after:transition-all">codeovik</a></p>
                    </div>
                </div>
                <p className="text-sm md:text-lg">
                    At Codeovik, coding is more than just writing lines of code. It’s about turning ideas into experiences that are engaging, interactive, and meaningful. Every project is a journey where creativity meets precision, and performance meets design. I believe technology should empower, educate, and inspire users to think critically and explore new possibilities. Through modern tools, clean design, and smooth interactions, Codeovik bridges the gap between imagination and reality. My mission is to craft digital products that not only look beautiful but also function seamlessly, making every interaction memorable. In essence, Codeovik is where passion, innovation, and user-centric thinking come together to shape the web of tomorrow.
                </p>
            </div>
        </>
    )
}

export default About;