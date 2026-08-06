'use client'
import {useRef, useEffect, useState } from "react";


const Team = () => {
 const [showCarousel, setShowCarousel] = useState(true);
 const teamMembers = [
   {
     name: "Jimmy Jean Baptiste",
     role: "Hack Project Manager",
     image: "https://i.ibb.co/7NvZRmZt/Jimmy-Photo.png",
     linkedin: "https://www.linkedin.com/in/jimmy-jean-baptiste-01679436a/"
   },
   {
    name: "Erick Gonzalez",
    role: "President",
    image: "https://i.ibb.co/B5Xf6bv9/Erick-Headshot.jpg",
    linkedin: "https://www.linkedin.com/in/erick-gonzalez-888b7a377/"
   },
   {
     name: "Elias Estrada",
     role: "Vice President",
     image: "https://i.ibb.co/F4SBLzMq/image.png",
     linkedin: "https://www.linkedin.com/in/elias-estrada-1445ab2b5/"
   },
   {
     name: "Dannia Dupotey",
     role: "Director of Marketing",
     image: "https://i.ibb.co/SDRF5Ncj/image.png",
     linkedin: "https://www.linkedin.com/in/dannia-dupotey-1169193b5/"
   },
   {
     name: "Kathween Vargas",
     role: "Director of Marketing",
     image: "https://placehold.net/avatar.svg",
     linkedin: ""
   },
   {
     name: "Mikhail Guevara",
     role: "Marketing",
     image: "https://placehold.net/avatar.svg",
     linkedin: ""
   },
   {
     name: "Linet Lima",
     role: "Director of Industry Relations",
     image: "https://i.ibb.co/ch61HG3R/image.png",
     linkedin: "https://www.linkedin.com/in/linet-lima-5437a0239/"
   },
   {
     name: "Kelvin Rodriguez",
     role: "Director of Industry Relations",
     image: "https://i.ibb.co/whjXXfhz/image.png",
     linkedin: "https://www.linkedin.com/in/kelvin-rodriguez-a519a0265/"
   },
   {
     name: "Richard Canina Miranda",
     role: "Director of Industry Relations",
     image: "https://i.ibb.co/Mvm1Fpn/image.png",
     linkedin: "https://www.linkedin.com/in/richardcm-info"
   },
   {
     name: "Fritz Bonhomme",
     role: "Director of Technology",
     image: "https://i.ibb.co/CsTxyC3M/image.png",
     linkedin: ""
   },
   {
     name: "Oliver Martinez Fernandez",
     role: "Director of Technology",
     image: "https://i.ibb.co/217YhzdL/image.png",
     linkedin: "https://www.linkedin.com/in/oliver-martinez-9a1ba4340/"
   },
   {
     name: "Placeholder",
     role: "Placeholder",
     image: "https://placehold.net/avatar.svg",
     linkedin: ""
   },
   {
     name: "Placeholder",
     role: "Placeholder",
     image: "https://placehold.net/avatar.svg",
     linkedin: ""
   }
 ]

 // Split team members into two halves
 const firstHalf = teamMembers.slice(0, Math.ceil(teamMembers.length / 2)); // First 7 members
 const secondHalf = teamMembers.slice(Math.ceil(teamMembers.length / 2)); // Last 6 members

 const TeamCard = ({ member }) => {
   return (
     <a 
       href={member.linkedin} 
       target="_blank" 
       rel="noopener noreferrer"
       className="my-1.5 flex justify-center items-center gap-0 flex-col bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-2 py-1 border-2 border-gray-600 pixel-shadow text-center transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] hover:scale-105 cursor-pointer flex-shrink-0 w-[20vw] h-[20vw]"
     >
       <div className="h-[20vw]">
         <img 
           src={member.image} 
           alt={member.name}
           className="w-[12vw] h-[12vw] rounded-full mx-auto mb-0.5 mt-0.5 border border-gray-600"
         />
         <h3 className="font-bold text-[20px]">{member.name}</h3>
         <p className="text-gray-300 relative top-[-10px] text-[20px]">{member.role}</p>
       </div>
     </a>
   );
 };


 return (
   <section id="team" className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden team-bg">
    <div className = "flex justify-center">
        {/* OURTEAM BUTTON */}
        <button onClick = {() => setShowCarousel(true)}
        id= "team-button" className=" hover:cursor-pointer hover:bg-none hover:bg-violet-950 mx-10 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-4 py-2 border-3 border-gray-600 pixel-shadow">
          <h1 className=" text-[4vw] font-bold text-center">Our Team</h1>
        </button>
        {/*COMMUNITY MEMBERS BUTTON*/}
        <button onClick = {() => setShowCarousel(false)}
         id = "community-button" className=" hover:cursor-pointer hover:bg-none hover:bg-violet-950 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-4 py-2 border-3 border-gray-600 pixel-shadow">
          <div className=" text-[4vw] font-bold text-center">Community Members</div>
        </button>
    </div>
    {showCarousel == false &&(
      <div className= "w-8/10 h-screen mx-10 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-4 py-2 border-3 border-gray-600 pixel-shadow"> 
      
      </div>
    )}
    
    {showCarousel && (
      <>
      {/* DESKTOP TWO-ROW CAROUSEL */}
      <div className=" max-mobile:hidden relative z-10 border-x-8 border-x-gray-900 w-8/10 overflow-hidden carousel-mask">
        <div className="flex flex-col">
          {/* TOP ROW */}
          <div className="marquee overflow-hidden">
            <div className="marquee__track marquee__left">
              {[...firstHalf, ...firstHalf].map((member, i) => <TeamCard key={`top-${i}`} member={member} />)}
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="marquee overflow-hidden">
            <div className="marquee__track marquee__right">
              {[...secondHalf, ...secondHalf].map((member, i) => <TeamCard key={`bottom-${i}`} member={member} />)}
            </div>
          </div>
        </div>
      </div>
      </>
    )}


     {/* MOBILE TWO-ROW CAROUSEL */}
     <div className="min-[651px]:hidden relative z-10 w-full overflow-x-auto">
       <div className="flex flex-col gap-2">
         {/* Top row - First 7 team members */}
         <div className="flex gap-2 px-4" style={{ width: 'max-content' }}>
           {teamMembers.slice(0, 7).map((member, index) => (
             <a 
               key={index} 
               href={member.linkedin} 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex justify-center items-center gap-0 flex-col bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-2 py-1 border-2 border-gray-600 pixel-shadow text-center transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] hover:scale-105 cursor-pointer flex-shrink-0"
             >
               <div className="h-[150px]">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-11 h-11 rounded-full mx-auto mb-0.5 mt-0.5 border border-gray-600"
                />
                <h3 className="font-bold text-[20px]">{member.name}</h3>
                <p className="text-gray-300 relative top-[-10px] text-[20px]">{member.role}</p>
               </div>
             </a>
           ))}
         </div>
         {/* Bottom row - Remaining 6 team members */}
         <div className="flex gap-2 px-4 pb-2" style={{ width: 'max-content' }}>
           {teamMembers.slice(7).map((member, index) => (
             <a 
               key={`bottom-${index + 7}`} 
               href={member.linkedin} 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex justify-center items-center gap-0 flex-col bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-2 py-1 border-2 border-gray-600 pixel-shadow text-center transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] hover:scale-105 cursor-pointer flex-shrink-0"
             >
               <div className="h-[150px]">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-11 h-11 rounded-full mx-auto mb-0.5 mt-0.5 border border-gray-600"
                />
                <h3 className="font-bold text-[20px]">{member.name}</h3>
                <p className="text-gray-300 relative top-[-10px] text-[20px]">{member.role}</p>
               </div>
             </a>
           ))}
         </div>
       </div>
     </div>
     {/* MOBILE SCROLL INDICATOR */}
     <div className="min-[651px]:hidden mt-8 text-white font-bold text-sm text-center max-[650px]:text-xs max-[500px]:text-[22px] max-[500px]:mt-4">
       ← Scroll horizontally →
     </div>

     {/* CSS for carousel animations */}
      <style jsx>{`
        .marquee {
          position: relative;
          width: 100%;
        }

        .marquee__track {
          display: flex;
          gap: 0.75rem;
          width: max-content;
          will-change: transform;
        }

        /* Left direction (continuous) */
        .marquee__left {
          animation: marquee-left 25s linear infinite;
        }

        /* Right direction (continuous) */
        .marquee__right {
          animation: marquee-right 25s linear infinite;
        }

        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Pause on hover - matching the sponsors behavior */
        .marquee:hover .marquee__track {
          animation-play-state: paused;
        }
      `}</style>
   </section>
 )
}

export default Team