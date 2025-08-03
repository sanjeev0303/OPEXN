// ========================================
// VISION MISSION COMPONENT - MODERN TECH PALETTE
// ========================================

import { Eye, Target } from "@/components/icons/micro"

const VisionMission = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 select-none relative overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="text-center md:text-left group">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <Eye className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold ml-4 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Vision</h3>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              To be the bridge between innovation and opportunity by connecting
              emerging ventures with infinite possibilities across markets,
              mentorship, and capital.
            </p>
          </div>

          <div className="text-center md:text-left group">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
                <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold ml-4 text-transparent bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text">Mission</h3>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              To build a global, hybrid ecosystem that supports and scales
              startups through digital exhibitions, access to capital,
              mentorship, and strategic collaborations — all under one platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default VisionMission
