'use client'

import { useState } from 'react'

const FAQ = () => {
  // Global state to track which question is currently open. 
  // Null means all are closed.
  const [openId, setOpenId] = useState(null)

  // Structured data based on the provided design plans
  const faqData = [
    {
      category: "General & Eligibility",
      questions: [
        {
          id: "q1",
          q: "What is a hackathon?",
          a: "A hackathon is a weekend-long invention marathon. Students come together to build innovative software or hardware projects from scratch, learn new tech, and connect with industry professionals."
        },
        {
          id: "q2",
          q: "Who can participate?",
          a: "SharkByte is open to all college and university students, as well as recent graduates (within 12 months). You must be 18 years or older to attend."
        },
        {
          id: "q3",
          q: "Does it cost anything to attend?",
          a: "Absolutely nothing! Admission, food, drinks, workshops, and swag are all completely free for accepted hackers."
        },
        {
          id: "q4",
          q: "I've never been to a hackathon and can't code. Can I join?",
          a: "Yes! Hackathons are the best place to learn. We will have beginner-friendly workshops, dedicated mentors to help you get unstuck, and team-building events so you can find a group with mixed skill levels."
        }
      ]
    },
    {
      category: "Team Rules",
      questions: [
        {
          id: "q5",
          q: "How big can teams be?",
          a: "Teams can consist of up to 4 members. You can work alone, but we highly encourage collaborating with others!"
        },
        {
          id: "q6",
          q: "What if I don't have a team or idea?",
          a: "Don't worry! We host team-formation events at the beginning of the hackathon where you can pitch ideas, meet other hackers, and form a squad before hacking begins."
        },
        {
          id: "q7",
          q: "Can I work on a past project?",
          a: "No. To maintain fairness, all code, design, and assets must be created entirely during the hackathon weekend. You can use open-source libraries and APIs, but the core project must be new."
        }
      ]
    },
    {
      category: "Logistics & Submissions",
      questions: [
        {
          id: "q8",
          q: "What should I bring?",
          a: "Bring a valid student/government ID, your laptop, a charger, any hardware you plan to use, comfortable clothes, and toiletries if you plan on staying overnight."
        },
        {
          id: "q9",
          q: "Is this event in-person, virtual, or hybrid?",
          a: "SharkByte is fully in-person! We believe the best hackathon experience comes from the energy of being on-site, collaborating, and networking face-to-face."
        },
        {
          id: "q10",
          q: "How does judging work?",
          a: "Projects are submitted via Devpost and judged by a panel of industry experts and sponsors. Judging criteria typically include technical complexity, innovation, UI/UX design, and practical utility."
        }
      ]
    }
  ]

  // Toggle function: If the clicked ID is already open, close it. Otherwise, open the new ID.
  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="w-full min-h-svh flex flex-col items-center justify-center relative overflow-hidden bg-gray-950 py-[100px] px-4 tablet:px-8">
      
      {/* Title */}
      <div className="retro-box pixel-shadow px-[6vw] py-[3vw] tablet:px-12 tablet:py-5 laptop:px-16 laptop:py-6 desktop:px-20 desktop:py-8 mb-16 max-w-[800px] mx-auto z-10">
        <h1 className="font-bold text-center text-[7vw] tablet:text-[5vw] laptop:text-4xl desktop:text-5xl">
          Frequently Asked Questions
        </h1>
      </div>

      {/* Main FAQ Container (Expanded for RPG Layout) */}
      <div className="w-full max-w-[1200px] flex flex-col gap-16 laptop:gap-24 z-10">
        
        {faqData.map((categoryBlock, catIndex) => (
          
          /* RPG Quest Log Layout: 1 column on mobile, 2 columns on laptop */
          <div key={catIndex} className="grid grid-cols-1 laptop:grid-cols-[300px_1fr] gap-6 laptop:gap-12 items-start w-full border-b border-gray-800/50 pb-16 last:border-0 last:pb-0">
            
            {/* LEFT COLUMN: Sticky Category Header */}
            <div className="laptop:sticky laptop:top-[120px] z-20">
              <div className="retro-box pixel-shadow bg-gray-900/90 backdrop-blur-sm px-6 py-4 inline-block border-2 border-[#8b5cf6]">
                <h2 className="text-[#a78bfa] font-bold text-[24px] tablet:text-[28px] laptop:text-[32px] uppercase tracking-wider">
                  {categoryBlock.category}
                </h2>
              </div>
            </div>

            {/* RIGHT COLUMN: Questions Wrapper */}
            <div className="flex flex-col gap-5">
              {categoryBlock.questions.map((q) => {
                const isOpen = openId === q.id

                return (
                  <div key={q.id} className="group relative">
                    
                    {/* 
                        The Retro Box: Translucent for future backgrounds. 
                        Includes the Hover Nudge (translate-x-2) and Active Border Glow 
                    */}
                    <div 
                      className={`retro-box pixel-shadow backdrop-blur-md transition-all duration-300 ease-in-out border-2 overflow-hidden ${
                        isOpen 
                          ? 'border-[#39ff14] bg-gray-900/95 translate-x-0 tablet:translate-x-2' 
                          : 'border-gray-600 bg-gray-900/80 group-hover:translate-x-0 tablet:group-hover:translate-x-2 group-hover:border-gray-400'
                      }`}
                    >
                      
                      {/* The Clickable Button */}
                      <button
                        onClick={() => toggleQuestion(q.id)}
                        className="w-full flex justify-between items-center p-5 tablet:p-8 text-left cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className={`font-bold text-[20px] tablet:text-[24px] laptop:text-[28px] pr-4 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                          {q.q}
                        </span>
                        
                        {/* Animated Action Icon: Rotates 45deg into an 'x' and turns pink when open */}
                        <span 
                          className={`font-bold text-[35px] tablet:text-[45px] leading-none shrink-0 w-[40px] text-center transition-all duration-300 ease-[cubic-bezier(0.8,0,0.2,1)] ${
                            isOpen ? 'rotate-45 text-pink-500 scale-110' : 'rotate-0 text-[#39ff14] scale-100'
                          }`}
                        >
                          +
                        </span>
                      </button>

                      {/* 
                          The Expandable Answer Box 
                          Uses an inset shadow and darker background to simulate a recessed screen 
                      */}
                      <div 
                        className={`grid transition-all duration-300 ease-[cubic-bezier(0.8,0,0.2,1)] ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="p-5 tablet:p-8 pt-6 tablet:pt-6 bg-gray-950/80 shadow-[inset_0_4px_20px_rgba(0,0,0,0.7)] border-t-2 border-gray-800/80">
                            <p className="text-[18px] tablet:text-[22px] laptop:text-[24px] text-gray-200 leading-relaxed font-medium">
                              {q.a}
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

export default FAQ