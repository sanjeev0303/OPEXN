// ========================================
// CONTACT SECTION COMPONENT - MODERN TECH PALETTE
// ========================================

import { Mail, Phone } from "@/components/icons/optimized"
import { Card, CardContent } from "@/components/ui/card"

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-transparent bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text select-none">
            Get In Touch
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 select-none">Ready to be part of the OPEXN ecosystem?</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-center">
            <Card className="bg-white border border-gray-200 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-gray-300 transition-all duration-500 hover:-translate-y-2 group">
              <CardContent className="pt-8 pb-8 select-none">
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 w-fit mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                  <Phone className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="font-bold mb-4 text-lg md:text-xl text-gray-900">Phone</h3>
                <p className="text-gray-700 text-base md:text-lg mb-2 hover:text-blue-600 transition-colors cursor-pointer">+91 84390 56300</p>
                <p className="text-gray-700 text-base md:text-lg hover:text-blue-600 transition-colors cursor-pointer">+91 70785 83771</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-gray-300 transition-all duration-500 hover:-translate-y-2 group select-none">
              <CardContent className="pt-8 pb-8">
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 w-fit mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
                  <Mail className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="font-bold mb-4 text-lg md:text-xl text-gray-900">Email</h3>
                <p className="text-gray-700 text-base md:text-lg hover:text-emerald-600 transition-colors cursor-pointer">info.opexn@gmail.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}


export default ContactSection
