'use client'
import { useState } from "react";

const Team = () => {
  const [showCarousel, setShowCarousel] = useState(true);
  const [showCMembers, setCMembers] = useState(false);

  const teamMembers = [
    {
      name: "Jimmy Jean Baptiste",
      role: "Hack Project Manager",
      image: "https://i.ibb.co/7NvZRmZt/Jimmy-Photo.png",
      linkedin: "https://www.linkedin.com/in/jimmy-jean-baptiste-01679436a/"
    },
    {
      name: "Erick Gonzalez",
      role: "President of INIT",
      image: "https://i.ibb.co/B5Xf6bv9/Erick-Headshot.jpg",
      linkedin: "https://www.linkedin.com/in/erick-gonzalez-888b7a377/"
    },
    {
      name: "Elias Estrada",
      role: "Vice President of INIT",
      image: "https://i.ibb.co/jZHvT0T1/image.png",
      linkedin: "https://www.linkedin.com/in/elias-estrada-1445ab2b5/"
    },
    {
      name: "Dannia Dupotey",
      role: "Director of Marketing",
      image: "https://i.ibb.co/5Pkw1tg/image.png",
      linkedin: "https://www.linkedin.com/in/dannia-dupotey-1169193b5/"
    },
    {
      name: "Kathween Vargas",
      role: "Director of Marketing",
      image: "https://i.ibb.co/hFH9PFjv/image.png",
      linkedin: ""
    },
    {
      name: "Mikhail Guevara",
      role: "Marketing",
      image: "https://i.ibb.co/hR4j6K5L/image.png",
      linkedin: "https://www.linkedin.com/in/mikhail-guevara-a425a6231/"
    },
    {
      name: "Linet Lima",
      role: "Director of Industry Relations",
      image: "https://i.ibb.co/F4f6JFct/image.png",
      linkedin: "https://www.linkedin.com/in/linet-lima-5437a0239/"
    },
    {
      name: "Kelvin Rodriguez",
      role: "Director of Industry Relations",
      image: "https://i.ibb.co/hRHdfnpb/image.png",
      linkedin: "https://www.linkedin.com/in/kelvin-rodriguez-a519a0265/"
    },
    {
      name: "Richard Canina Miranda",
      role: "Director of Industry Relations",
      image: "https://i.ibb.co/CpHkbgh2/image.png",
      linkedin: "https://www.linkedin.com/in/richardcm-info"
    },
    {
      name: "Fritz Bonhomme",
      role: "Director of Technology",
      image: "https://i.ibb.co/Ndrnx4V6/image.png",
      linkedin: ""
    },
    {
      name: "Oliver Martinez Fernandez",
      role: "Director of Technology",
      image: "https://i.ibb.co/BVSMT9Dm/image.png",
      linkedin: "https://www.linkedin.com/in/oliver-martinez-9a1ba4340/"
    }
  ];
// List of Community Members/Partners
  const communityPartners = [
    {
      name: "City of Coral Gables",
      logo: "https://i.ibb.co/8LwsNNcX/image.png",
      website: "https://www.coralgables.com/department/innovation-and-technology"
    },
    {
      name: "MDC Entec",
      logo: "https://i.ibb.co/ZRGcKBQz/image.png",
      website: "https://www.mdc.edu/entec/"
    }, 
    {
      name: "MDC Magic Lab",
      logo: "https://i.ibb.co/hRjk6hwb/image.png",
      website: "https://magic.mdc.edu/"
    }
  ];

  const facultyAdvisors = [
    { name: "Carmen Bucher" },
    { name: "George Gabb" }
  ];

  // Split team members into two halves
  const firstHalf = teamMembers.slice(0, Math.ceil(teamMembers.length / 2));
  const secondHalf = teamMembers.slice(Math.ceil(teamMembers.length / 2));

  // TEAM MEMBER CARD INFO CONTAINER
  const TeamCard = ({ member }) => {
    return (
      <a 
        href={member.linkedin || '#'} 
        target={member.linkedin ? "_blank" : "_self"} 
        rel="noopener noreferrer"
        className="my-1.5 flex justify-center items-center flex-col bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white p-3 border-2 border-gray-600 pixel-shadow text-center transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] hover:scale-105 cursor-pointer flex-shrink-0 w-44 sm:w-52 lg:w-60 h-auto"
      >
        <div className="flex flex-col items-center w-full">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-35 lg:h-35 rounded-full mb-2 border border-gray-600"
          />
          <h3 className="font-bold tracking-wide text-sm sm:text-base lg:text-lg leading-tight line-clamp-1">{member.name}</h3>
          <p className="text-gray-300 text-xs sm:text-sm lg:text-base mt-1">{member.role}</p>
        </div>
      </a>
    );
  };

  // COMMUNITY PARTNER INFO CONTAINER
  const CommunityPartnerCard = ({ member }) => {
    return (
      <a 
        href={member.website || '#'} 
        target={member.website ? "_blank" : "_self"} 
        rel="noopener noreferrer"
        className="flex flex-col justify-center items-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white p-4 border-2 border-gray-600 pixel-shadow text-center transition-transform duration-300 hover:scale-105 cursor-pointer w-full max-w-[220px] aspect-square mx-auto"
      >
        <img 
          src={member.logo} 
          alt={member.name}
          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-35 lg:h-35 rounded-full mb-3 border border-gray-600 p-1 bg-gray-900"
        />
        <h3 className="font-bold tracking-wide text-xs sm:text-sm lg:text-base line-clamp-2">{member.name}</h3>
      </a>
    );
  };

  // FACULTY ADVISOR INFO CONTAINER
  const FacultyAdvisorCard = ({ member }) => {
    return (
      <div className="flex justify-center items-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white p-6 border-2 border-gray-600 pixel-shadow text-center w-full max-w-[280px] aspect-[4/3] mx-auto">
        <h3 className="font-bold tracking-wide text-lg sm:text-2xl lg:text-3xl">{member.name}</h3>
      </div>
    );
  };

  return (
    <section id="team" className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden team-bg py-10 px-4">
      {/* NAVIGATION BUTTONS */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 z-10 max-w-full">
        <button /* TEAM BUTTON */
          onClick={() => { setShowCarousel(true); setCMembers(false); }}
          className={`hover:cursor-pointer transition-colors px-3 py-2 sm:px-5 sm:py-3 border-2 sm:border-3 border-gray-600 pixel-shadow ${
            showCarousel ? 'bg-violet-950 text-white' : 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white hover:bg-violet-950'
          }`}
        >
          <h2 className="text-xs sm:text-base md:text-xl lg:text-2xl font-bold text-center">Our Team</h2>
        </button>

        <button /* COMMUNITY PARTNERS BUTTON */
          onClick={() => { setShowCarousel(false); setCMembers(true); }}
          className={`hover:cursor-pointer transition-colors px-3 py-2 sm:px-5 sm:py-3 border-2 sm:border-3 border-gray-600 pixel-shadow ${
            !showCarousel && showCMembers ? 'bg-violet-950 text-white' : 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white hover:bg-violet-950'
          }`}
        >
          <h2 className="text-xs sm:text-base md:text-xl lg:text-2xl font-bold text-center">Community Partners</h2>
        </button>

        <button /* FACULTY ADVISORS */
          onClick={() => { setShowCarousel(false); setCMembers(false); }}
          className={`hover:cursor-pointer transition-colors px-3 py-2 sm:px-5 sm:py-3 border-2 sm:border-3 border-gray-600 pixel-shadow ${
            !showCarousel && !showCMembers ? 'bg-violet-950 text-white' : 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white hover:bg-violet-950'
          }`}
        >
          <h2 className="text-xs sm:text-base md:text-xl lg:text-2xl font-bold text-center">Faculty Advisors</h2>
        </button>
      </div>

      {/* COMMUNITY PARTNERS BOX */}
      {!showCarousel && showCMembers && (
        <div className="w-full max-w-5xl min-h-[50vh] max-h-[75vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:p-6 md:p-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white border-2 sm:border-3 border-gray-600 pixel-shadow items-center"> 
          {communityPartners.map((member, index) => (
            <CommunityPartnerCard key={index} member={member} />
          ))}
        </div>
      )}

      {/* FACULTY ADVISORS BOX */}
      {!showCarousel && !showCMembers && (
        <div className="w-full max-w-4xl min-h-[40vh] max-h-[75vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 sm:p-10 md:p-12 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white border-2 sm:border-3 border-gray-600 pixel-shadow items-center justify-items-center"> 
          {facultyAdvisors.map((member, index) => (
            <FacultyAdvisorCard key={index} member={member} />
          ))}
        </div>
      )}

      {/* DESKTOP TWO-ROW MARQUEE */}
      {showCarousel && (
        <div className="hidden md:block relative z-10 border-x-4 md:border-x-8 border-x-gray-900 w-full max-w-6xl overflow-hidden carousel-mask">
          <div className="flex flex-col gap-4 py-2">
            {/* TOP ROW */}
            <div className="marquee overflow-hidden">
              <div className="marquee__track marquee__left">
                {[...firstHalf, ...firstHalf].map((member, i) => (
                  <TeamCard key={`top-${i}`} member={member} />
                ))}
              </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="marquee overflow-hidden">
              <div className="marquee__track marquee__right">
                {[...secondHalf, ...secondHalf].map((member, i) => (
                  <TeamCard key={`bottom-${i}`} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE SCROLLABLE CAROUSEL */}
      {showCarousel && (
        <div className="md:hidden relative z-10 w-full overflow-x-auto">
          <div className="flex flex-col gap-3 py-2">
            {/* Top row */}
            <div className="flex gap-3 px-4" style={{ width: 'max-content' }}>
              {firstHalf.map((member, index) => (
                <TeamCard key={`mobile-top-${index}`} member={member} />
              ))}
            </div>
            {/* Bottom row */}
            <div className="flex gap-3 px-4" style={{ width: 'max-content' }}>
              {secondHalf.map((member, index) => (
                <TeamCard key={`mobile-bottom-${index}`} member={member} />
              ))}
            </div>
          </div>
          {/* MOBILE SCROLL INDICATOR */}
          <div className="mt-4 text-white font-bold text-xs sm:text-sm text-center">
            ← Scroll horizontally →
          </div>
        </div>
      )}

      {/* CSS for marquee animations */}
      <style jsx>{`
        .marquee {
          position: relative;
          width: 100%;
        }

        .marquee__track {
          display: flex;
          gap: 1rem;
          width: max-content;
          will-change: transform;
        }

        .marquee__left {
          animation: marquee-left 25s linear infinite;
        }

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

        .marquee:hover .marquee__track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Team;