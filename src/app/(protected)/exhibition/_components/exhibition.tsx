"use client";
import { PavilionImage } from "./pavilion";

export function Exhibition() {
  const handleClick = () => {
    window.open("https://opexn-meet.vercel.app/", "_blank");
  };

  const handleVisitExhibition = () => {
    window.open("https://stall-ui-kf9f.vercel.app/", "_blank");
  };

  return (
    <div
      className="min-h-screen p-4 md:p-8 relative overflow-hidden"
      style={{ backgroundColor: '#0F0F23' }}
    >
      {/* Futuristic background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/20 backdrop-blur-[1px]"></div>

      {/* Animated background particles effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with modern tech colors */}
        <div
          className="text-center mb-8 animate-fade-in-up"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-2"
              style={{
                background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #FFE66D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(255, 107, 107, 0.3))'
              }}>
            Virtual Exhibition Hall
          </h1>
          <p className="text-lg font-medium" style={{ color: '#E0E0E0' }}>
            Discover Innovation • Connect with Excellence • Experience the Future
          </p>
        </div>

        {/* Video Section with tech styling */}
        <div
          className="relative w-full h-50 sm:h-64 md:h-96 rounded-2xl mb-8 overflow-hidden animate-scale-in animate-delay-200"
          style={{
            background: 'linear-gradient(45deg, #1A1A2E, #4ECDC4) padding-box, linear-gradient(45deg, #FF6B6B, #FFE66D, #4ECDC4) border-box',
            border: '3px solid transparent',
            boxShadow: '0 8px 32px rgba(255, 107, 107, 0.2), 0 0 0 1px rgba(78, 205, 196, 0.1), 0 0 40px rgba(78, 205, 196, 0.1)'
          }}
        >
          <video
            className="w-full h-full object-cover rounded-xl"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={"/curtain_reveal.mp4"} type="video/mp4" />
          </video>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 p-2">
            {/* Premium Pavilions */}
            <div
              className="mb-12 animate-slide-in-left animate-delay-200"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 relative" style={{ color: '#FFFFFF' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Premium Pavilions
                </span>
                <div
                  className="absolute -bottom-2 left-0 w-20 h-1 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
                    boxShadow: '0 4px 12px rgba(255, 107, 107, 0.4), 0 0 20px rgba(255, 230, 109, 0.2)'
                  }}
                ></div>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="pavilion-container hover-scale"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.15), rgba(255, 230, 109, 0.1))',
                      border: '2px solid rgba(255, 107, 107, 0.4)',
                      borderRadius: '16px',
                      boxShadow: '0 8px 32px rgba(255, 107, 107, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      padding: '8px'
                    }}
                  >
                    <PavilionImage />
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Stalls */}
            <div
              className="animate-fade-in-up animate-delay-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 relative" style={{ color: '#FFFFFF' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #4ECDC4, #A8E6CF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Interactive Stalls
                </span>
                <div
                  className="absolute -bottom-2 left-0 w-20 h-1 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #4ECDC4, #A8E6CF)',
                    boxShadow: '0 4px 12px rgba(78, 205, 196, 0.4), 0 0 20px rgba(168, 230, 207, 0.2)'
                  }}
                ></div>
              </h2>
              <div>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 md:gap-4">
                  {[...Array(32)].map((_, i) => (
                    <div key={i} className="relative group">
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center border-2 rounded-lg relative transition-all duration-300 cursor-pointer group hover-scale"
                        style={{
                          borderColor: '#4ECDC4',
                          background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.12), rgba(168, 230, 207, 0.08))',
                          backdropFilter: 'blur(15px)',
                          boxShadow: '0 4px 16px rgba(78, 205, 196, 0.15)'
                        }}
                      >
                        {i % 5 === 0 && (
                          <div className="dot absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <span className="flex size-3">
                              <span
                                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                                style={{ backgroundColor: '#FFE66D' }}
                              ></span>
                              <span
                                className="relative inline-flex size-3 rounded-full"
                                style={{ backgroundColor: '#FFE66D' }}
                              ></span>
                            </span>
                          </div>
                        )}
                        <span
                          className="text-xs group-hover:text-white transition-colors"
                          style={{ color: '#9E9E9E' }}
                        >
                          {i + 1}
                        </span>
                      </div>
                      {/* Simple tooltip on hover */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        Stall {i + 1} - Click to explore
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="lg:w-1/3 flex flex-col gap-6 animate-slide-in-right animate-delay-400"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 relative" style={{ color: '#FFFFFF' }}>
              <span style={{
                background: 'linear-gradient(135deg, #FFE66D, #FF6B6B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Quick Actions
              </span>
              <div
                className="absolute -bottom-2 left-0 w-16 h-1 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #FFE66D, #FF6B6B)',
                  boxShadow: '0 4px 12px rgba(255, 230, 109, 0.4), 0 0 20px rgba(255, 107, 107, 0.2)'
                }}
              ></div>
            </h2>

            {/* Primary CTA - Modern coral */}
            <button
              className="w-full h-24 rounded-xl text-white flex items-center justify-center relative overflow-hidden group transition-all duration-300 hover-lift"
              style={{
                background: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
                boxShadow: '0 8px 32px rgba(255, 107, 107, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 107, 107, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              onClick={handleClick}
            >
              <span className="text-2xl md:text-3xl font-bold relative z-10">
                Buyer Zone
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>

            {/* Secondary Button - Mint green */}
            <button
              className="w-full h-24 rounded-xl text-white flex items-center justify-center relative overflow-hidden group transition-all duration-300 hover-lift"
              style={{
                background: 'linear-gradient(135deg, #4ECDC4, #6EE5DB)',
                boxShadow: '0 8px 32px rgba(78, 205, 196, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 40px rgba(78, 205, 196, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              onClick={handleClick}
            >
              <span className="text-xl md:text-2xl font-bold relative z-10">
                Join Discussion
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>

            {/* Tertiary Button - Bright yellow */}
            <button
              className="w-full h-24 rounded-xl flex items-center justify-center relative overflow-hidden group transition-all duration-300 hover-lift"
              style={{
                background: 'linear-gradient(135deg, #FFE66D, #FFF176)',
                boxShadow: '0 8px 32px rgba(255, 230, 109, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 230, 109, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#0F0F23'
              }}
              onClick={handleVisitExhibition}
            >
              <span className="text-xl md:text-2xl font-bold relative z-10">
                Visit Exhibition
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
