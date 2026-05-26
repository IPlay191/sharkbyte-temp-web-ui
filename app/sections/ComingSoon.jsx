const ComingSoon = () => 
{

    // Draw the following coming soon message in a pixel art style on-screen
    return (

        <section id = "coming-soon" className = "w-screen h-screen flex items-center justify-end pr-[8vw] desktop:pr-[12vw] relative overflow-hidden comingsoon-bg">

            {/* THE BOX: Starts at p-8 for phones, grows to p-16 on tablets/laptops */}
            <div className = "w-[65vw] tablet:w-[55vw] laptop:w-[45vw] desktop:w-[40vw] h-auto min-h-[200px] retro-box pixel-shadow p-8 tablet:p-10 laptop:p-12 desktop:p-14 relative">
                
                {/* THE TEXT: Starts at text-2xl for phones, grows to text-4xl on tablets/laptops */}
                <h2 className="font-bold text-2xl tablet:text-4xl laptop:text-6xl desktop:text-7xl">

                    SEA YOU SOON. WE'RE COMING BACK WITH A <span className="relative inline-block">SPLASH!!!

                        <img className="absolute top-1/2 left-full ml-2 h-30 w-auto -translate-y-1/2" src="/Water Drop.gif" alt="Water drop" />

                    </span>
                    
                </h2>

            </div>

        </section>

    )
}

export default ComingSoon