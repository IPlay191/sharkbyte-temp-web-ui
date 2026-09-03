'use client'

import { useState } from 'react'

const FAQ = () => {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  // Manages the accordion states. Ensures only one category/question can be open at a time.
  const [openCategory, setOpenCategory] = useState(null)
  const [openQuestion, setOpenQuestion] = useState(null)

  const faqData = [
    {
      category: "General & Eligibility",
      questions: [
        { id: "q1", q: "What is a hackathon?", a: "A hackathon is a weekend-long invention marathon. Students come together to build innovative software or hardware projects from scratch, learn new tech, and connect with industry professionals." },
        { id: "q2", q: "Who can participate?", a: "SharkByte is open to all college and university students, as well as recent graduates (within 12 months). You must be 18 years or older to attend." },
        { id: "q3", q: "Does it cost anything to attend?", a: "Absolutely nothing! Admission, food, drinks, workshops, and swag are all completely free for accepted hackers." },
        { id: "q4", q: "I've never been to a hackathon and can't code. Can I join?", a: "Yes! Hackathons are the best place to learn. We will have beginner-friendly workshops, dedicated mentors to help you get unstuck, and team-building events so you can find a group with mixed skill levels." }
      ]
    },
    {
      category: "Team Rules",
      questions: [
        { id: "q5", q: "How big can teams be?", a: "Teams can consist of up to 4 members. You can work alone, but we highly encourage collaborating with others!" },
        { id: "q6", q: "What if I don't have a team or idea?", a: "Don't worry! We host team-formation events at the beginning of the hackathon where you can pitch ideas, meet other hackers, and form a squad before hacking begins." },
        { id: "q7", q: "Can I work on a past project?", a: "No. To maintain fairness, all code, design, and assets must be created entirely during the hackathon weekend. You can use open-source libraries and APIs, but the core project must be new." }
      ]
    },
    {
      category: "Logistics & Submissions",
      questions: [
        { id: "q8", q: "What should I bring?", a: "Bring a valid student/government ID, your laptop, a charger, any hardware you plan to use, comfortable clothes, and toiletries. If you plan on staying overnight, sleeping accommodations are provided, but it can get very chilly! We highly recommend bringing a pillow, warm attire, and blankets." },
        { id: "q9", q: "Is this event in-person, virtual, or hybrid?", a: "SharkByte is fully in-person! We believe the best hackathon experience comes from the energy of being on-site, collaborating, and networking face-to-face." },
        { id: "q10", q: "Will there be vegan or vegetarian options?", a: "Absolutely! We will provide proper food accommodations for both vegans and vegetarians to ensure everyone stays fully fueled throughout the entire weekend." },
        { id: "q11", q: "How does judging work?", a: "Projects are submitted via Devpost and judged by a panel of industry experts and sponsors. Judging criteria typically include technical complexity, innovation, UI/UX design, and practical utility." }
      ]
    }
  ]

  // Toggles categories. Opening a new category automatically closes all active questions to prevent layout bloat.
  const handleCategoryToggle = (catIndex) => {
    if (openCategory === catIndex) {
      setOpenCategory(null)
      setOpenQuestion(null) 
    } else {
      setOpenCategory(catIndex)
      setOpenQuestion(null) 
    }
  }

  const handleQuestionToggle = (qId) => {
    setOpenQuestion(openQuestion === qId ? null : qId)
  }

  // ============================================================================
  // RENDER COMPONENT
  // ============================================================================
  return (
    <section id="faq" className="w-full min-h-svh flex flex-col items-center justify-center relative overflow-hidden faq-bg py-[100px] px-4 tablet:px-8">  
        
      {/* SECTION HEADER */}
      <div className="retro-box pixel-shadow px-[6vw] py-[3vw] tablet:px-12 tablet:py-5 laptop:px-16 laptop:py-6 desktop:px-20 desktop:py-8 mb-16 max-w-[800px] mx-auto z-10">
        <h1 className="font-bold text-center text-[7vw] tablet:text-[5vw] laptop:text-4xl desktop:text-5xl text-white">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="w-full max-w-[900px] flex flex-col gap-6 z-10">
        
        {faqData.map((categoryBlock, catIndex) => {
          const isCategoryOpen = openCategory === catIndex

          return (
            <div key={catIndex} className="flex flex-col w-full">
              
              {/* TIER 1: CATEGORY CONTROLLER */}
              {/* STYLING: Applies premium glowing box-shadow and thickens the border when active to simulate an illuminated arcade console. */}
              <button
                onClick={() => handleCategoryToggle(catIndex)}
                className={`retro-box flex justify-between items-center w-full px-6 py-5 tablet:px-8 tablet:py-6 transition-all duration-300 ease-in-out cursor-pointer z-20 ${
                  isCategoryOpen 
                    ? 'bg-gray-900 border-4 border-[#8b5cf6] shadow-[0_0_25px_rgba(139,92,246,0.6)]' 
                    : 'bg-gray-950 border-2 border-[#8b5cf6]/30 hover:border-[#8b5cf6]/70 hover:bg-gray-900/80 pixel-shadow'
                }`}
              >
                {/* Dynamically injects the custom .glow-text CSS keyframe for active categories to create a pulsing neon effect. */}
                <h2 className={`font-bold text-[22px] tablet:text-[28px] uppercase tracking-wider transition-colors duration-300 ${
                  isCategoryOpen ? 'text-[#a78bfa] glow-text' : 'text-gray-200'
                }`}>
                  {categoryBlock.category}
                </h2>
                
                <span className={`text-[#8b5cf6] font-bold text-[28px] leading-none shrink-0 transition-transform duration-300 ${
                  isCategoryOpen ? 'rotate-180' : 'rotate-0'
                }`}>
                  ▼
                </span>
              </button>

              {/* TIER 2: ACCORDION CONTENT WRAPPER */}
              {/* ANIMATION: Uses CSS grid tricks (grid-rows-[0fr] to grid-rows-[1fr]) to cleanly animate heights without hardcoding pixel values. */}
              <div 
                className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isCategoryOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                }`}
              >
                <div className="overflow-hidden min-h-0 flex flex-col gap-3 pl-4 tablet:pl-10">
                  
                  {categoryBlock.questions.map((q) => {
                    const isQuestionOpen = openQuestion === q.id

                    return (
                      <div key={q.id} className="w-full">
                        
                        {/* THE QUESTION BUTTON */}
                        {/* STYLING: Generates a neon edge-glow on the left border to signify focus within the sub-menu. */}
                        <button
                          onClick={() => handleQuestionToggle(q.id)}
                          className={`w-full flex justify-between items-center p-4 tablet:p-5 text-left transition-all duration-300 border-l-4 ${
                            isQuestionOpen 
                              ? 'bg-gray-800/80 border-[#39ff14] shadow-[-5px_0_20px_rgba(57,255,20,0.4)] z-10 relative' 
                              : 'bg-gray-900/50 border-gray-700 hover:bg-gray-800/80 hover:border-gray-500'
                          }`}
                        >
                          <span className={`font-bold text-[18px] tablet:text-[22px] pr-4 transition-colors duration-300 ${
                            isQuestionOpen ? 'text-white' : 'text-gray-300'
                          }`}>
                            {q.q}
                          </span>
                          
                          <span className={`font-bold text-[28px] leading-none shrink-0 transition-all duration-300 ${
                            isQuestionOpen ? 'rotate-45 text-pink-500' : 'rotate-0 text-[#39ff14]'
                          }`}>
                            +
                          </span>
                        </button>

                        {/* THE QUESTION ANSWER */}
                        <div 
                          className={`grid transition-all duration-300 ease-in-out ${
                            isQuestionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden min-h-0">
                            {/* DEPTH ILLUSION: Employs an inset shadow to simulate a physically recessed monitor screen rendering text. */}
                            <div className="p-4 tablet:p-6 bg-gray-950/90 shadow-[inset_0_8px_25px_rgba(0,0,0,0.9)] border-l-4 border-[#39ff14]/30">
                              <p className="text-[16px] tablet:text-[20px] text-gray-300 leading-relaxed">
                                {q.a}
                              </p>
                            </div>
                          </div>
                        </div>

                      </div>
                    )
                  })}
                </div>
              </div>

            </div>
          )
        })}

      </div>
    </section>
  )
}

export default FAQ