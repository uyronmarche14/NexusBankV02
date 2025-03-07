import React from "react";

export const LandingPage = () => {
  return (
    <div className="h-[100vh] w-full bg-background-DEFAULT px-4  pb-8 relative items-center justify-center ">
      <div className="w-full pt-36 *:rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
        <div className="flex flex-col items-center justify-center flex-1 w-full relative z-10 m md:mt-0">
          <div className="flex flex-col items-center gap-8 text-center max-w-5xl relative z-10">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-7xl font-bold text-primary-dark leading-20 tracking-tight drop-shadow-sm font-sm text-center">
                NBANK Where Financial Clarity Meets Elegant Simplicity.
              </h1>
            </div>

            <p className="text-lg text-text-DEFAULT max-w-4xl leading-relaxed backdrop-blur-sm text-center">
              Your financial journey starts here. Nexus Banking combines
              cutting-edge security with intuitive design, giving you complete
              control over your finances with a touch of sophistication.
              Experience banking reimagined for the modern world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full max-w-sm sm:max-w-none items-center justify-center">
              <button className="flex-1 bg-accent-DEFAULT text-white text-lg font-semibold h-14 rounded-xl hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-out backdrop-blur-sm border-1 border-color-flare">
                Start Your Savings
              </button>
              <button className="flex-1 bg-white/10 backdrop-blur-md text-primary-dark text-lg font-semibold h-14 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 hover:shadow-md transition-all duration-300">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
