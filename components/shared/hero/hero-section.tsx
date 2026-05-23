const HeroSection = () => {
    return (
         <div className="w-full min-h-dvh relative overflow-hidden">
            <div className="relative z-2 min-h-dvh w-full  mx-auto overflow-hidden ">
                <div className="bg-secondary absolute left-1/2 -translate-x-1/2 top-1/2 rounded-full z-3 aspect-square w-screen" />
                <div style={{
                    boxShadow: "inset 0 3px 0px 2px #ff8040, inset 0 4px 30px #ff4c0c, inset 0 6px 80px #ff4c0c, inset 0 10px 120px rgba(255,76,12,0.6), 0 -4px 15px 2px #ff4c0c, 0 -2px 60px 10px rgba(255,76,12,0.8)"
                }} className="bg-background absolute left-1/2 -translate-x-1/2 top-[50%] rounded-full z-4 aspect-square w-[110vw]" />
                <div className="h-1/2 w-1/4 bg-linear-to-r from-background to-transparent absolute left-0 bottom-0 z-5" />
                <div className="h-1/2 w-1/4 bg-linear-to-l from-background to-transparent absolute right-0 bottom-0 z-5" />
            </div>
        </div>


    )
}

export default HeroSection