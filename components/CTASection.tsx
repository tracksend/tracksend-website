import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[3rem] bg-linear-to-br from-navy to-navy-dark p-12 md:p-24 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-pattern-cyan opacity-5 pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
              Ready to turn messaging into a growth engine?
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-medium">
              Start businesses using Tracksend to scale their engagement
              effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-10 py-4 bg-primary text-navy rounded-2xl font-black text-lg hover:shadow-glow-cyan hover:scale-105 transition-all">
                <a href="/pricing">Get Started</a>
              </button>
              <button className="px-10 py-4 bg-white/10 text-white rounded-2xl font-black text-lg border border-white/20 hover:bg-white/20 transition-all">
                <a href="https://tracksend.as.me/schedule/9cf8d404">
                  Book a demo
                </a>
              </button>
            </div>
            <p className="mt-8 text-gray-500 text-sm font-bold uppercase tracking-widest">
              No credit card required • Instant setup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
