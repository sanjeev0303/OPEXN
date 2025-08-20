// ========================================
// FEATURED EVENTS COMPONENT - MODERN TECH PALETTE
// ========================================

import { Calendar } from "@/components/icons"
import { CheckCircle, Clock } from "@/components/icons/micro"
import { ArrowRight } from "@/components/icons/optimized"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const FeaturedEvents = () => {
  return (
    <section id="events" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 select-none relative overflow-hidden">
      {/* Modern geometric patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-600 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-emerald-500 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-transparent bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text">
            Upcoming Events
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto px-4">
            Join our specialized programs designed to connect professionals with global opportunities across multiple sectors
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* EdTech Round Table */}
          <Card className="group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 bg-white border border-gray-200 overflow-hidden lg:col-span-2 hover:-translate-y-1">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-72 lg:h-full overflow-hidden">
                <Image
                  src="/edtech-roundtable.png"
                  alt="EdTech Round Table Chandigarh - Tech-Empowered Teaching"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <Badge className="mb-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 text-white border-0 px-4 py-1 text-sm font-semibold">
                    EdTech
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                    Tech-Empowered Teaching
                  </h3>
                  <p className="text-lg md:text-xl text-gray-200">EdTech Round Table</p>
                </div>
              </div>

              <CardContent className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                  <div className="flex items-center space-x-3 text-blue-600">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="font-bold text-base md:text-lg">29th August, 2025</span>
                  </div>
                  <div className="flex items-center space-x-3 text-purple-600">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="font-semibold text-base md:text-lg">Chandigarh</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
                  Uniting educators, innovators & leaders to shape NEP-driven, tech-enabled learning for Chandigarh's future.
                </p>

                <div className="mb-6">
                  <h4 className="font-bold mb-4 text-gray-900 text-base md:text-lg">Discussion Areas:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-700">Tech & SaaS Impact on Education</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-700">NEP's Impact on Academia</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-amber-500 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-700">10:00 AM - 1:00 PM</span>
                    </div>
                  </div>
                </div>

                <Link href="https://forms.gle/5UkuGAraqBormcq67">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 text-white text-base md:text-lg py-3 md:py-4 font-semibold border-0 transition-all duration-300 hover:scale-105">
                    Register for Round Table
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>

          {/* Dubai Agri Export Event */}
          {/* <Card className="group hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 bg-white border border-gray-200 overflow-hidden hover:-translate-y-1">
            <div className="relative h-72 md:h-80 overflow-hidden">
              <Image
                src="/dubai-agri-export.png"
                alt="Gateway to Dubai - Agri Export Round Table"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <Badge className="mb-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-lg hover:shadow-emerald-500/25 text-white border-0 px-4 py-1 text-sm font-semibold">
                  Agri Export
                </Badge>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                  Gateway to Dubai
                </h3>
                <p className="text-base md:text-lg text-gray-200">Agri Export Round Table</p>
              </div>
            </div>

            <CardContent className="p-6 md:p-8 bg-gradient-to-br from-white to-gray-50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                <div className="flex items-center space-x-3 text-emerald-600">
                  <Calendar className="w-5 h-5" />
                  <span className="font-bold text-sm md:text-base">5th August, 2025*</span>
                </div>
                <div className="flex items-center space-x-3 text-cyan-600">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold text-sm md:text-base">New Delhi, India</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
                Connect with UAE trade officials, institutional buyers, and agri-tech ecosystem for export opportunities to Dubai markets.
              </p>

              <div className="mb-6">
                <h4 className="font-bold mb-4 text-gray-900 text-sm md:text-base">Key Components:</h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-gray-700">Export Stakeholder Dialogue</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-gray-700">UAE Expert Insights & Roadmap</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-gray-700">Market and Policy Access</span>
                  </div>
                </div>
              </div>

              <Link href="https://forms.gle/3cZoi2xMswg4D658A">
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-lg hover:shadow-emerald-500/25 text-white text-sm md:text-base py-3 font-semibold border-0 transition-all duration-300 hover:scale-105">
                  Register for Round Table
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card> */}

          {/* Women Entrepreneurs Training */}
          {/* <Card className="group hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 bg-white border border-gray-200 overflow-hidden hover:-translate-y-1">
            <div className="relative h-72 md:h-80 overflow-hidden">
              <Image
                src="/women-training-program.png"
                alt="Women Entrepreneurs Training Program - From Local to Global"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <Badge className="mb-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:shadow-lg hover:shadow-rose-500/25 text-white border-0 px-4 py-1 text-sm font-semibold">
                  Women Empowerment
                </Badge>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                  From Local to Global
                </h3>
                <p className="text-base md:text-lg text-gray-200">3 Day Training Program</p>
              </div>
            </div>

            <CardContent className="p-6 md:p-8 bg-gradient-to-br from-white to-gray-50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                <div className="flex items-center space-x-3 text-rose-600">
                  <Calendar className="w-5 h-5" />
                  <span className="font-bold text-sm md:text-base">12-14th August, 2025</span>
                </div>
                <div className="flex items-center space-x-3 text-purple-600">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold text-sm md:text-base">3 Days</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
                Empowering women entrepreneurs & SHGs in gifts & handicrafts business for global markets.
              </p>

              <div className="mb-6">
                <h4 className="font-bold mb-4 text-gray-900 text-sm md:text-base">Focus Areas:</h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-gray-700">Product Quality & Market Readiness</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-gray-700">E-Commerce & Digital Selling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-gray-700">Export Preparedness</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:shadow-lg hover:shadow-rose-500/25 text-white text-sm md:text-base py-3 font-semibold border-0 transition-all duration-300 hover:scale-105">
                Register for Training
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  )
}

export default FeaturedEvents
