import React from "react";
import ScrollingCard from "@/app/components/services/scrolling_card/page";

export const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-background-DEFAULT relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[-15%] left-[-15%] w-[600px] h-[600px] bg-primary-DEFAULT/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[600px] h-[600px] bg-accent-DEFAULT/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative px-6 py-24 md:py-40 max-w-8xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-16">
          {/* Subtle badge above heading */}
          <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 mb-2 animate-fade-in">
            <span className="text-base text-primary-dark/80">
              Welcome to the Future of Banking
            </span>
          </div>

          {/* Main content */}
          <div className="space-y-10 text-center max-w-5xl">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-dark leading-tight tracking-tight">
              Where Financial Clarity Meets{" "}
              <span className="text-accent-DEFAULT">Elegant Simplicity</span>
            </h1>

            <p className="text-xl text-text-DEFAULT/80 leading-relaxed max-w-4xl mx-auto">
              Your financial journey starts here. Experience banking reimagined
              for the modern world, with cutting-edge security and intuitive
              design.
            </p>

            {/* CTA Buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <button
                className="px-10 py-5 bg-accent-DEFAULT text-white font-medium rounded-xl text-lg
                hover:shadow-lg hover:shadow-accent-DEFAULT/20 hover:-translate-y-0.5 
                transition-all duration-300 ease-out backdrop-blur-sm"
              >
                Start Your Journey
              </button>
              <button
                className="px-10 py-5 bg-white/5 text-primary-dark font-medium rounded-xl text-lg
                border border-white/10 hover:bg-white/10 hover:border-white/20 
                hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Services
              </button>
            </div>

            {/* Trust indicators */}
          </div>
          <ScrollingCard />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
