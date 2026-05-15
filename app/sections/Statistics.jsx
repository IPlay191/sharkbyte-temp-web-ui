const Statistics = () => {
    const stats = [
        { text: "200+ Attendees", hoverColor: "hover:text-blue-700" },
        { text: "130 Participants", hoverColor: "hover:text-pink-400" },
        { text: "49 Completed Projects", hoverColor: "hover:text-yellow-400" },
    ];

    return (
        <section id="statistics" className="w-screen min-h-dvh flex items-center justify-center relative overflow-x-hidden overflow-y-auto stats-bg pt-[80px] pb-8">

            {/* MAIN Wrapper: Stacks the title above the statistics card */}
            <div className=" relative flex flex-col items-center gap-[4vw] tablet:gap-8 max-h-[750px]:gap-4 z-10 flex-shrink-0">

                {/* LEFT SIDE BIRDS */}
                <img className="absolute max-laptop:hidden w-[160px] h-[160px] -left-[180px] top-[15%] animate-[bounce-high_6s_ease-in-out_infinite] pointer-events-none select-none" src='/Pixel Bird.png' alt="Bird1" />
                <img className="absolute w-[80px] h-[80px] tablet:w-[120px] tablet:h-[120px] -left-[40px] tablet:-left-[100px] top-[55%] animate-[bounce-high_6s_ease-in-out_infinite] pointer-events-none select-none" src='/Pixel Bird.png' alt="Bird2" /> 
            
                {/* THE TITLE */}
                <div className="retro-box pixel-shadow px-[6vw] py-[3vw] tablet:px-12 tablet:py-5 laptop:px-16 laptop:py-6 desktop:px-20 desktop:py-8 max-h-[750px]:px-8 max-h-[750px]:py-3">

                    <h1 className="font-bold text-center text-[7vw] tablet:text-[5vw] laptop:text-4xl desktop:text-5xl max-h-[750px]:text-2xl">

                        Last Year We Had...

                    </h1>

                </div>

                {/* THE BOX */}
                <div className="retro-box pixel-shadow p-8 tablet:p-12 laptop:p-16 desktop:p-18 max-h-[750px]:p-6">

                    <div className="flex flex-col gap-6 tablet:gap-8 laptop:gap-10 desktop:gap-12 max-h-[750px]:gap-4">

                        {stats.map((stat, index) => (

                            <h2 key={index} className={`font-bold text-2xl tablet:text-4xl laptop:text-5xl desktop:text-6xl max-h-[750px]:text-xl ${stat.hoverColor}`}>
                                
                                {stat.text}
                            
                            </h2>

                        ))}

                    </div>

                </div>

                {/* RIGHT SIDE BIRDS */}
                <img className="absolute w-[80px] h-[80px] tablet:w-[120px] tablet:h-[120px] -right-[40px] tablet:-right-[100px] top-[30%] animate-[bounce-high_6s_ease-in-out_infinite] pointer-events-none select-none" src='/Pixel Bird.png' alt="Bird3" /> 
                <img className="absolute max-laptop:hidden w-[160px] h-[160px] -right-[180px] top-[70%] animate-[bounce-high_6s_ease-in-out_infinite] pointer-events-none select-none" src='/Pixel Bird.png' alt="Bird4" /> 

            </div>

        </section>
    )
}

export default Statistics