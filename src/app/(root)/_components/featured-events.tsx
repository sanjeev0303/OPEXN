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
import EventCard from "./event-card"

const FeaturedEvents = () => {
  return (
    <section id="events" className="py-16 md:py-24 bg-gradient-to-b from-gray-300 via-white to-gray-100 select-none relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-transparent bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text">
            Upcoming Events
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto px-4">
            Join our specialized programs designed to connect professionals with global opportunities across multiple sectors
          </p>
        </div>

        <EventCard />
      </div>
    </section>
  )
}

export default FeaturedEvents
