// ========================================
// CORE VERTICALS COMPONENT - MODERN TECH PALETTE
// ========================================

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, TrendingUp, GraduationCap, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"

const modernVerticals = [
  {
    icon: Globe,
    title: "Virtual Exhibitions",
    description: "Always-on, immersive digital spaces for continuous global visibility",
    content: "Create interactive digital booths with videos, decks, and chat features. Function beyond single-day events with 2D/3D virtual environments for real-time engagement.",
    badges: ["Interactive Booths", "2D/3D Environment", "Global Reach"],
    gradient: "from-blue-600 to-purple-600",
    iconBg: "bg-gradient-to-r from-blue-600 to-purple-600",
    hoverShadow: "hover:shadow-2xl hover:shadow-blue-500/10"
  },
  {
    icon: TrendingUp,
    title: "Business Acceleration",
    description: "Smart matchmaking connecting startups with the right ecosystem resources",
    content: "Connect with mentors, investors, and partners through curated programs. From pitch clinics to cohort-based accelerators for scalable growth and strategic funding.",
    badges: ["Smart Matching", "Pitch Clinics", "Funding Access"],
    gradient: "from-purple-600 to-indigo-600",
    iconBg: "bg-gradient-to-r from-purple-600 to-indigo-600",
    hoverShadow: "hover:shadow-2xl hover:shadow-purple-500/10"
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity Building",
    description: "Actionable startup knowledge through curated learning experiences",
    content: "Micro-courses, expert-led webinars, and certification tracks designed for real-world relevance. Gain skills for better pitches and stronger strategies.",
    badges: ["Micro-courses", "Expert Webinars", "Certifications"],
    gradient: "from-emerald-500 to-cyan-500",
    iconBg: "bg-gradient-to-r from-emerald-500 to-cyan-500",
    hoverShadow: "hover:shadow-2xl hover:shadow-emerald-500/10"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Marketplace",
    description: "Direct selling platform integrated with startup profiles and exhibitions",
    content: "List and sell products directly to global customers. Support secure transactions and early revenue generation while validating demand.",
    badges: ["Global Sales", "Secure Transactions", "Revenue Generation"],
    gradient: "from-rose-500 to-orange-500",
    iconBg: "bg-gradient-to-r from-rose-500 to-orange-500",
    hoverShadow: "hover:shadow-2xl hover:shadow-rose-500/10"
  },
]

const CoreVerticals = () => {
  return (
    <section id="verticals" className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-white select-none relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {Array.from({length: 144}).map((_, i) => (
            <div key={i} className="border border-gray-300 rounded-sm"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-transparent bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text">
            OPEXN's 4 Core Verticals
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive solutions designed to accelerate startup growth at every stage
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {modernVerticals.map((vertical, index) => {
            const IconComponent = vertical.icon
            return (
              <Card
                key={index}
                className={cn(
                  "group transition-all duration-500 bg-white border border-gray-200",
                  "hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-2",
                  vertical.hoverShadow
                )}
              >
                <CardHeader className="pb-4">
                  <div className={cn("w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110", vertical.iconBg)}>
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-gray-900 font-bold">{vertical.title}</CardTitle>
                  <CardDescription className="text-base md:text-lg text-gray-600">{vertical.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">{vertical.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {vertical.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        className="bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 transition-colors text-xs px-3 py-1"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}


export default CoreVerticals
