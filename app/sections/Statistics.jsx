const Statistics = () => {
    const stats = [
        { text: "200+ Attendees", hoverColor: "hover:text-blue-700" },
        { text: "130 Participants", hoverColor: "hover:text-pink-400" },
        { text: "49 Completed Projects", hoverColor: "hover:text-yellow-400" },
    ];

    return (
        <section id="statistics" className="w-screen h-screen flex items-center justify-center relative overflow-hidden stats-bg">

            {/* LEFT SIDE BIRDS */}
            <img className="relative flex w-50 h-50 laptop:left-5 animate-[bounce-high_6s_ease-in-out_infinite]" src='/Pixel Bird.png' alt="Bird1" />
            <img className="relative flex w-40 h-40 left-10 tablet:w-50 tablet:h-50 laptop:w-50 laptop:h-50 desktop:w-50 desktop:h-50 animate-[bounce-high_6s_ease-in-out_infinite]" src='/Pixel Bird.png' alt="Bird2" /> 

            {/* MAIN Wrapper: Stacks the title above the statistics card */}
            <div className="flex flex-col items-center gap-[4vw] tablet:gap-8 z-10">
        
                {/* THE TITLE */}
                <div className="retro-box pixel-shadow px-[6vw] py-[3vw] tablet:px-12 tablet:py-5 laptop:px-16 laptop:py-6 desktop:px-20 desktop:py-8">

                    <h1 className="font-bold text-center text-[7vw] tablet:text-[5vw] laptop:text-4xl desktop:text-5xl">

                        Last Year We Had...

                    </h1>

                </div>

                {/* THE BOX */}
                <div className="retro-box pixel-shadow p-8 tablet:p-12 laptop:p-16 desktop:p-18">

                    <div className="flex flex-col gap-6 tablet:gap-8 laptop:gap-10 desktop:gap-12">

                        {stats.map((stat, index) => (

                            <h2 key={index} className={`font-bold text-2xl tablet:text-4xl laptop:text-5xl desktop:text-6xl ${stat.hoverColor}`}>{stat.text}
                            
                            </h2>

                        ))}

                    </div>

                </div>

            </div>

            {/* RIGHT SIDE BIRDS */}
            <img className="relative flex w-40 h-40 right-10 tablet:w-50 tablet:h-50 laptop:w-50 laptop:h-50 desktop:w-50 desktop:h-50 animate-[bounce-high_6s_ease-in-out_infinite]" src='/Pixel Bird.png' alt="Bird3" /> 
            <img className="relative flex w-50 h-50 laptop:right-5 animate-[bounce-high_6s_ease-in-out_infinite]" src='/Pixel Bird.png' alt="Bird4" /> 

        </section>
    )
}

export default Statistics