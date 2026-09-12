const Footer = () => {
  // ============================================================================
  // LOGIC & STATE
  // ============================================================================
  // Dynamically fetches the current year to ensure the copyright never outdates.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-950 border-t-2 border-gray-800 text-white relative z-50">
      
      {/* 
        RESPONSIVE CONTAINER:
        - Mobile: flex-col-reverse (Stacks links on top, copyright on bottom)
        - Laptop: flex-row (Spreads copyright to the left, links to the right)
        - max-w-[1400px] ensures it aligns perfectly with the Hero and Sponsors constraints.
        - Increased horizontal padding (px-12 on desktop) to gently frame the content on ultra-wides.
      */}
      <div className="flex flex-col-reverse laptop:flex-row justify-between items-center px-6 py-8 laptop:px-12 laptop:py-6 w-full max-w-[1400px] mx-auto gap-8 laptop:gap-0">

        {/* COPYRIGHT BRANDING */}
        <div className="flex items-center">
          {/* Typography scaled heavily to compensate for the thin stroke of the VT323 pixel font. */}
          <p className="text-blue-300 font-bold text-[24px] tablet:text-[30px] laptop:text-[36px] tracking-wide">
            © {currentYear} SharkByte
          </p>
        </div>

        {/* 
          LEGAL & POLICY NAVIGATION 
          Employs CSS Grid on mobile/tablet to perfectly square the 4 links (2x2), 
          then shifts to an inline Flexbox row for widescreen desktop viewing.
        */}
        <nav 
          aria-label="Footer Legal Links"
          className="grid grid-cols-1 mobile:grid-cols-2 laptop:flex laptop:flex-row flex-wrap justify-center laptop:justify-end gap-4 tablet:gap-x-10 tablet:gap-y-6 laptop:gap-10 items-center"
        >
          <a
            href="https://weareinit.notion.site/Terms-and-Conditions-SharkByte-2025-2629f4e8ae4e80329c36f65620006db9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 font-medium hover:text-[#a78bfa] hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 text-center laptop:text-right text-[18px] tablet:text-[22px] laptop:text-[26px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
          >
            SharkByte TOS
          </a>
          
          {/* 
            MLH COMPLIANCE LINKS: 
            Mandatory for all Major League Hacking Member Events. 
          */}
          <a
            href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 font-medium hover:text-[#a78bfa] hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 text-center laptop:text-right text-[18px] tablet:text-[22px] laptop:text-[26px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
          >
            MLH Code of Conduct
          </a>
          <a
            href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 font-medium hover:text-[#a78bfa] hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 text-center laptop:text-right text-[18px] tablet:text-[22px] laptop:text-[26px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
          >
            MLH Contest Terms
          </a>
          <a
            href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 font-medium hover:text-[#a78bfa] hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 text-center laptop:text-right text-[18px] tablet:text-[22px] laptop:text-[26px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
          >
            MLH Privacy Policy
          </a>
        </nav>

      </div>
    </footer>
  )
}

export default Footer