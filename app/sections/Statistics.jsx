const Statistics = () => 
{
    const stats = [
        { text: "200+ Attendees", hoverColor: "hover:text-blue-700" },
        { text: "130 Participants", hoverColor: "hover:text-pink-400" },
        { text: "49 Completed Projects", hoverColor: "hover:text-yellow-400" },
    ];

    // Draw the following statistics in a pixel art style on-screen
    return (

        <section id = "statistics" className = "w-screen h-screen flex items-center justify-center relative overflow-hidden stats-bg">
            {/* THE LEFT SIDE BIRDS: inner birds start at width-40 and length-40 for phones, grow to width-50 and length-50 on tablets/laptops */}
            <img className="relative flex w-50 h-50 laptop:left-5 animate-[bounce-high_6s_ease-in-out_infinite]" src='/Pixel Bird.png' alt="Bird1" />
            <img className="relative flex w-40 h-40 left-10 tablet:w-50 tablet:h-50 laptop:w-50 laptop:h-50 desktop:w-50 desktop:h-50 animate-[bounce-high_6s_ease-in-out_infinite]" src='/Pixel Bird.png' alt="Bird2" /> 

            {/* THE BOX: Starts at p-8 for phones, grows to p-16 on tablets/laptops */}
            <div className = "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white border-3 border-gray-600 pixel-shadow p-8 tablet:p-12 laptop:p-16 desktop:p-18">
                
                {/* THE TEXT GAPS: Starts at gap-6 for phones, grows to gap-12 on tablets/laptops */}
                <div className = "flex flex-col gap-6 tablet:gap-8 laptop:gap-10 desktop:gap-12">

                    {/* THE TEXT: Starts at text-2xl for phones, grows to text-4xl on tablets/laptops */}
                    {stats.map((stat, index) => (
                        <h2 key={index} className={`font-bold text-2xl tablet:text-4xl laptop:text-5xl desktop:text-6xl ${stat.hoverColor}`}>{stat.text}</h2>
                    ))}

                </div>

            </div>
            {/* THE RIGHT SIDE BIRDS: inner birds start at width-40 and length-40 for phones, grow to width-50 and length-50 on tablets/laptops */}
            <img className="relative flex w-40 h-40 right-10 tablet:w-50 tablet:h-50 laptop:w-50 laptop:h-50 desktop:w-50 desktop:h-50 animate-[bounce-high_6s_ease-in-out_infinite]" src='/Pixel Bird.png' alt="Bird3" /> 
            <img className="relative flex w-50 h-50 laptop:right-5 animate-[bounce-high_6s_ease-in-out_infinite]" src='/Pixel Bird.png' alt="Bird4" /> 

    </section>

    )
}

export default Statistics