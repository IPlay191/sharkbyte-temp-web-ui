'use client'

const Team = () => {
 const teamMembers = [
   {
     name: "Placeholder",
     role: "Placeholder",
     image: "https://placehold.net/avatar.svg",
     linkedin: "https://www.linkedin.com/in/abigail-lozano317/"
   },
   {
    name: "Placeholder",
    role: "Placeholder",
    image: "https://placehold.net/avatar.svg",
    linkedin: "https://www.linkedin.com/in/alfredobenites/"
   },
   {
     name: "Placeholder",
     role: "Placeholder",
     image: "https://placehold.net/avatar.svg",
     linkedin: "https://www.linkedin.com/in/elias-estrada-1445ab2b5"
   },
   {
     name: "Placeholder",
     role: "Placeholder",
     image: "https://placehold.net/avatar.svg",
     linkedin: "https://www.linkedin.com/in/daniel-rodriguez-3ab841372"
   },
   {
     name: "Placeholder",
     role: "Placeholder",
     image: "https://placehold.net/avatar.svg",
     linkedin: "https://www.linkedin.com/in/jorge-rodriguez-27a4a6231/"
   },
   {
     name: "Placeholder",
     role: "Placeholder",
     image: "https://placehold.net/avatar.svg",
     linkedin: "https://www.linkedin.com/in/yp06/"
   },
   {
     name: "Placeholder",
     role: "Placeholder",
     image: "https://placehold.net/avatar.svg",
     linkedin: "https://www.linkedin.com/in/raul02/"
   },
   {
     name: "Placeholder",
     role: "Placeholder",
     image: "https://placehold.net/avatar.svg",
     linkedin: "https://www.linkedin.com/in/julianna-chii/"
   },
   {
     name: "Placeholder",
     role: "Placeholder",
     image: "https://placehold.net/avatar.svg",
     linkedin: "https://www.linkedin.com/in/pablovaldes01/"
   },
   {
     name: "Placeholder",
     role: "Placeholder",
     image: "https://placehold.net/avatar.svg",
     linkedin: "https://www.linkedin.com/in/santiago-padron-62922526b/"
   },
   {
     name: "Placeholder",
     role: "Placeholder",
     image: "https://placehold.net/avatar.svg",
     linkedin: "https://www.linkedin.com/in/jimmy-j-01679436a/?trk=contact-info"
   },
   {
     name: "Placeholder",
     role: "Placeholder",
     image: "https://placehold.net/avatar.svg",
     linkedin: "https://www.linkedin.com/in/christian-aguilera-4b480b306/"
   },
   {
     name: "Placeholder",
     role: "Placeholder",
     image: "https://placehold.net/avatar.svg",
     linkedin: "https://www.linkedin.com/in/erick-gonzalez-888b7a377/"
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
       className="my-1.5 flex justify-center items-center gap-0 flex-col bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-2 py-1 border-2 border-gray-600 pixel-shadow text-center transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] hover:scale-105 cursor-pointer flex-shrink-0 w-[180px]"
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
   );
 };

 return (
   <section id="team" className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden team-bg">
    <div className = "flex justify-center">
        {/* OURTEAM BUTTON */}
        <div className=" mx-10 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-4 py-2 border-3 border-gray-600 pixel-shadow">
          <h1 className=" text-[4vw] font-bold text-center">Our Team</h1>
        </div>
        {/*COMMUNITY MEMBERS BUTTON*/}
        <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-4 py-2 border-3 border-gray-600 pixel-shadow">
          <button className=" text-[4vw] font-bold text-center">Community Members</button>
        </div>
    </div>

      {/* DESKTOP TWO-ROW CAROUSEL */}
      <div className="max-[650px]:hidden relative z-10 border-x-8 border-x-gray-900 w-full max-w-[700px] overflow-hidden">
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