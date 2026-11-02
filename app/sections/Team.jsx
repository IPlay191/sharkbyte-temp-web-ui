'use client'
import Image from "next/image";
import { useState } from "react";

const Team = () => {
  const [activeTab, setActiveTab] = useState('team');

  const teamMembers = [
    { name: "Jimmy Jean Baptiste", role: "Hack Project Manager", image: "/images/team/jimmy-jean-baptiste.png", linkedin: "https://www.linkedin.com/in/jimmy-jean-baptiste-01679436a/" },
    { name: "Erick Gonzalez", role: "President of INIT", image: "/images/team/erick-gonzalez.png", linkedin: "https://www.linkedin.com/in/erick-gonzalez-888b7a377/" },
    { name: "Elias Estrada", role: "Vice President of INIT", image: "/images/team/elias-estrada.png", linkedin: "https://www.linkedin.com/in/elias-estrada-1445ab2b5/" },
    { name: "Dannia Dupotey", role: "Director of Marketing", image: "/images/team/dannia-dupotey.png", linkedin: "https://www.linkedin.com/in/dannia-dupotey-1169193b5/" },
    { name: "Kathween Vargas", role: "Director of Marketing", image: "/images/team/kathween-vargas.png", linkedin: "https://www.linkedin.com/in/kathween-vargas-villafuerte-6409941aa/" },
    { name: "Mikhail Guevara", role: "Marketing", image: "/images/team/mikhail-guevara.png", linkedin: "https://www.linkedin.com/in/mikhail-guevara-a425a6231/" },
    { name: "Linet Lima", role: "Director of Industry Relations", image: "/images/team/linet-lima.png", linkedin: "https://www.linkedin.com/in/linet-lima-5437a0239/" },
    { name: "Kelvin Rodriguez", role: "Director of Industry Relations", image: "/images/team/kelvin-rodriguez.png", linkedin: "https://www.linkedin.com/in/kelvin-rodriguez-a519a0265/" },
    { name: "Richard Canina Miranda", role: "Director of Industry Relations", image: "/images/team/richard-canina-miranda.png", linkedin: "https://www.linkedin.com/in/richardcm-info" },
    { name: "Fritz Bonhomme", role: "Director of Technology", image: "/images/team/fritz-bonhomme.jpg", linkedin: "" },
    { name: "Oliver Martinez Fernandez", role: "Web Development", image: "/images/team/oliver-martinez-fernandez.png", linkedin: "https://www.linkedin.com/in/oliver-martinez-9a1ba4340/" }
  ];

  const communityPartners = [
    { name: "City of Coral Gables", logo: "/images/partners/partner-coral-gables-logo.png", website: "https://www.coralgables.com/department/innovation-and-technology" },
    { name: "MDC Entec", logo: "/images/partners/partner-mdc-entec-logo.png", website: "https://www.mdc.edu/entec/" },
    { name: "MDC Magic Lab", logo: "/images/partners/partner-mdc-magic-lab-logo.png", website: "https://magic.mdc.edu/" },
    { name: "Major League Hacking", logo: "/images/partners/partner-mlh-logo.jpg", website: "https://mlh.io/" },
    { name: "ManaTech", logo: "/images/partners/partner-mana-tech-logo.png", website: "https://manatech.com/" }
  ];

  const facultyAdvisors = [
    { name: "Carmen Bucher" },
    { name: "George Gabb" }
  ];

  const firstHalf = teamMembers.slice(0, Math.ceil(teamMembers.length / 2));
  const secondHalf = teamMembers.slice(Math.ceil(teamMembers.length / 2));

  const TeamCard = ({ member }) => (
    <a 
      href={member.linkedin || '#'} 
      target={member.linkedin ? "_blank" : "_self"} 
      rel="noopener noreferrer"
      className="group relative z-0 hover:z-50 flex flex-col justify-start items-center bg-gray-950/95 border-2 border-gray-700/50 hover:border-[#8b5cf6] rounded-xl p-3 tablet:p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(139,92,246,0.5)] cursor-pointer flex-shrink-0 w-[120px] mobile:w-[140px] tablet:w-[150px] laptop:w-[170px] xl:w-[190px] 2xl:w-[220px] min-h-[160px] mobile:min-h-[180px] tablet:min-h-[190px] laptop:min-h-[210px] xl:min-h-[230px] 2xl:min-h-[250px]"
    >
      <div className="flex flex-col items-center w-full h-full">
        <Image
          src={member.image} 
          alt={member.name} 
          width={112}
          height={112}
          className="w-14 h-14 mobile:w-16 mobile:h-16 tablet:w-16 tablet:h-16 laptop:w-20 laptop:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 rounded-full mb-2 tablet:mb-3 border-2 border-gray-500 group-hover:border-[#8b5cf6] transition-colors duration-300 object-cover shadow-lg" 
        />
        <h3 className="font-bold tracking-wide text-[11px] mobile:text-[13px] tablet:text-[14px] laptop:text-[15px] xl:text-[17px] 2xl:text-[19px] text-gray-200 group-hover:text-white transition-colors duration-300 leading-tight line-clamp-1 w-full">
          {member.name}
        </h3>
        <div className="flex-grow flex items-start justify-center mt-1 tablet:mt-2 w-full">
          <p className="text-gray-400 text-[9px] mobile:text-[11px] tablet:text-[12px] laptop:text-[13px] xl:text-[14px] line-clamp-2 leading-snug">
            {member.role}
          </p>
        </div>
      </div>
    </a>
  );

  const CommunityPartnerCard = ({ member }) => (
    <a 
      href={member.website || '#'} 
      target={member.website ? "_blank" : "_self"} 
      rel="noopener noreferrer"
      className="group relative z-0 hover:z-50 flex flex-col justify-center items-center bg-gray-950/95 border-2 border-gray-700/50 hover:border-[#8b5cf6] hover:bg-gray-900/80 rounded-xl p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(139,92,246,0.5)] cursor-pointer h-[120px] tablet:h-[130px] laptop:h-[140px] xl:h-[160px] w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] max-w-[320px]"
    >
      <div className="w-14 h-14 tablet:w-16 tablet:h-16 laptop:w-20 laptop:h-20 xl:w-24 xl:h-24 mb-2 relative flex justify-center items-center">
        <Image
          src={member.logo} 
          alt={member.name} 
          width={96}
          height={96}
          className="w-full h-full object-contain filter drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300" 
        />
      </div>
      <div className="flex items-start justify-center w-full">
        <h3 className="font-bold tracking-wide text-[11px] mobile:text-[12px] tablet:text-[13px] laptop:text-[15px] text-gray-400 group-hover:text-white transition-colors duration-300 text-center line-clamp-1">
          {member.name}
        </h3>
      </div>
    </a>
  );

  const FacultyAdvisorCard = ({ member }) => (
    <div className="group relative z-0 hover:z-50 flex justify-center items-center bg-gray-950/95 border-2 border-gray-700/50 hover:border-[#8b5cf6] hover:bg-gray-900/80 rounded-xl text-white p-6 text-center h-[100px] tablet:h-[120px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(139,92,246,0.5)] w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(50%-0.75rem)] max-w-[350px]">
      <h3 className="font-bold tracking-wide text-lg tablet:text-xl laptop:text-2xl text-gray-300 group-hover:text-white transition-colors duration-300">
        {member.name}
      </h3>
    </div>
  );

  return (
    <section id="team" className="isolate z-0 w-full h-full flex flex-col justify-start items-center relative overflow-hidden team-bg py-[4vh] px-4">
      
      <div className="w-full flex flex-col items-center justify-start h-full max-w-[1400px] mx-auto">
        <div className="flex flex-wrap justify-center gap-3 tablet:gap-6 z-10 max-w-full mt-[5vh] mb-2 tablet:mb-4 laptop:mb-6">
          <button
            onClick={() => setActiveTab('team')}
            className={`hover:cursor-pointer transition-colors px-4 py-2 tablet:px-6 tablet:py-3 border-2 sm:border-3 border-gray-600 rounded-lg shadow-lg ${activeTab === 'team' ? 'bg-violet-950 text-white border-[#8b5cf6]' : 'bg-gray-950/95 text-gray-300 hover:bg-gray-900'}`}
          >
            <h2 className="text-sm tablet:text-lg laptop:text-xl desktop:text-2xl font-bold text-center">Our Team</h2>
          </button>
          <button
            onClick={() => setActiveTab('partners')}
            className={`hover:cursor-pointer transition-colors px-4 py-2 tablet:px-6 tablet:py-3 border-2 sm:border-3 border-gray-600 rounded-lg shadow-lg ${activeTab === 'partners' ? 'bg-violet-950 text-white border-[#8b5cf6]' : 'bg-gray-950/95 text-gray-300 hover:bg-gray-900'}`}
          >
            <h2 className="text-sm tablet:text-lg laptop:text-xl desktop:text-2xl font-bold text-center">Community Partners</h2>
          </button>
          <button
            onClick={() => setActiveTab('advisors')}
            className={`hover:cursor-pointer transition-colors px-4 py-2 tablet:px-6 tablet:py-3 border-2 sm:border-3 border-gray-600 rounded-lg shadow-lg ${activeTab === 'advisors' ? 'bg-violet-950 text-white border-[#8b5cf6]' : 'bg-gray-950/95 text-gray-300 hover:bg-gray-900'}`}
          >
            <h2 className="text-sm tablet:text-lg laptop:text-xl desktop:text-2xl font-bold text-center">Faculty Advisors</h2>
          </button>
        </div>

        <div className="flex-grow flex flex-col justify-start items-center w-full">
          {activeTab === 'partners' && (
            <div className="custom-retro-scrollbar w-full max-w-[1000px] max-h-[65vh] overflow-y-auto flex flex-wrap justify-center gap-4 tablet:gap-6 p-4 tablet:p-8 bg-gray-950/95 border border-gray-700/50 shadow-2xl mx-auto rounded-2xl my-auto"> 
              {communityPartners.map((member, index) => <CommunityPartnerCard key={index} member={member} />)}
            </div>
          )}

          {activeTab === 'advisors' && (
            <div className="custom-retro-scrollbar w-full max-w-[800px] max-h-[65vh] overflow-y-auto flex flex-wrap justify-center gap-4 tablet:gap-6 p-4 tablet:p-8 bg-gray-950/95 border border-gray-700/50 shadow-2xl mx-auto rounded-2xl my-auto"> 
              {facultyAdvisors.map((member, index) => <FacultyAdvisorCard key={index} member={member} />)}
            </div>
          )}

          {activeTab === 'team' && (
            <div className="hidden md:flex relative z-10 w-full max-w-[1400px] mx-auto overflow-hidden carousel-mask flex-col justify-center pt-6 pb-12">
              <div className="flex flex-col gap-[3vh] laptop:gap-[4vh] px-2">
                <div className="marquee">
                  <div className="marquee__track marquee__left items-center">
                    {[...firstHalf, ...firstHalf, ...firstHalf].map((member, i) => <TeamCard key={`top-${i}`} member={member} />)}
                  </div>
                </div>
                <div className="marquee">
                  <div className="marquee__track marquee__right items-center">
                    {[...secondHalf, ...secondHalf, ...secondHalf].map((member, i) => <TeamCard key={`bottom-${i}`} member={member} />)}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="custom-retro-scrollbar md:hidden relative z-10 w-full overflow-x-auto carousel-mask pb-6 pt-4">
              <div className="flex flex-col gap-[3vh] w-max px-4">
                <div className="flex gap-4">
                  {firstHalf.map((member, index) => <TeamCard key={`mobile-top-${index}`} member={member} />)}
                </div>
                <div className="flex gap-4">
                  {secondHalf.map((member, index) => <TeamCard key={`mobile-bottom-${index}`} member={member} />)}
                </div>
              </div>
              <div className="text-gray-400 font-bold text-sm text-center drop-shadow-md mt-6 animate-pulse">
                ← Swipe horizontally →
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;