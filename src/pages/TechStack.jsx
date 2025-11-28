const TechStack = () => {
    return (
        <>
            <h1 className="flex sm:text-8xl font-semibold max-w-250 mx-auto text-4xl flex-wrap justify-center items-center gap-3 md:gap-6 mb-25">
                <span>The</span>
                <span>stack</span>
                <img src="/robot.jpg" alt="" className="h-10 sm:h-24 rounded-full aspect-auto" />
                <span>that</span>
                <span>builds</span>
                <span>codeovik</span>
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-[#151515] hover:bg-[#202020] transition-all aspect-square gap-4 rounded-2xl flex flex-col items-center justify-center">
                    <img src="/react.png" alt="react" className="aspect-square w-1/2" />
                    <p className="text-2xl">React JS</p>
                </div>
                <div className="bg-[#151515] hover:bg-[#202020] transition-all aspect-square gap-4 rounded-2xl flex flex-col items-center justify-center">
                    <img src="/mongodb.png" alt="mongodb" className="aspect-square w-1/2" />
                    <p className="text-2xl">MongoDB</p>
                </div>
                <div className="bg-[#151515] hover:bg-[#202020] transition-all aspect-square gap-4 rounded-2xl flex flex-col items-center justify-center">
                    <img src="/tailwind.png" alt="tailwind" className="aspect-square w-1/2" />
                    <p className="text-2xl">Tailwind CSS</p>
                </div>
                <div className="bg-[#151515] hover:bg-[#202020] transition-all aspect-square gap-4 rounded-2xl flex flex-col items-center justify-center">
                    <img src="/vue.png" alt="vue" className="aspect-square w-1/2" />
                    <p className="text-2xl">Vue JS</p>
                </div>
                <div className="bg-[#151515] hover:bg-[#202020] transition-all aspect-square gap-4 rounded-2xl flex flex-col items-center justify-center">
                    <img src="/node.png" alt="node" className="aspect-square w-1/2" />
                    <p className="text-2xl">Node JS</p>
                </div>
                <div className="bg-[#151515] hover:bg-[#202020] transition-all aspect-square gap-4 rounded-2xl flex flex-col items-center justify-center">
                    <img src="/express.png" alt="express" className="aspect-square w-1/2" />
                    <p className="text-2xl">Express JS</p>
                </div>
                <div className="bg-[#151515] hover:bg-[#202020] transition-all aspect-square gap-4 rounded-2xl flex flex-col items-center justify-center">
                    <img src="/next.png" alt="next" className="aspect-square w-1/2" />
                    <p className="text-2xl">Next JS</p>
                </div>
            </div>
        </>
    );
}

export default TechStack;