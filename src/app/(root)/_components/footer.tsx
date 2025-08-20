// ========================================
// UPDATED FOOTER COMPONENT
// ========================================

import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0A0E1A] to-[#141B2E] text-white py-12 md:py-16 select-none border-t border-[rgba(226,232,240,0.1)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4 group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="logo"
                width={180}
                height={90}
                className="object-contain filter brightness-110"
              />
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[#94A3B8] mb-2 md:mb-3 text-base md:text-lg">
              Founded 2025 • Based in <span className="text-[#00D9FF]">Delhi, NCR</span>
            </p>
            <p className="text-sm md:text-base text-[#64748B]">
              © 2025 <span className="text-transparent bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] bg-clip-text font-semibold">OPEXN</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
