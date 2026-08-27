import React from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Heart 
} from 'lucide-react';

export const MatchReactionVideo: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#1F1728] via-[#16101E] to-[#0D0914] rounded-2xl border border-stone-800/80 p-5 sm:p-7 shadow-xl">
      
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-800/60">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#3E2B4E] border border-[#715488]/60 flex items-center justify-center text-[#E5DAC6] shrink-0">
            <Heart className="w-4 h-4 fill-[#E5DAC6]/40 text-[#E5DAC6]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#DCC9A8]">
                Match Day Live Reaction
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-stone-300 font-medium">
                Dec 1, 2025
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-serif text-white font-normal">
              Parents' Reaction to Williams College Match
            </h3>
          </div>
        </div>

        <a
          href="https://www.tiktok.com/@ajsm3/video/7579342820360637709"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 hover:bg-white/15 text-stone-200 hover:text-white text-xs font-medium rounded-lg border border-white/10 transition-colors w-fit"
        >
          <span>Watch on TikTok</span>
          <ExternalLink className="w-3 h-3 text-[#DCC9A8]" />
        </a>
      </div>

      {/* Main Content Layout: Side-by-side on large screens, stacked on mobile */}
      <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Side: Vertical TikTok Player Container */}
        <div className="lg:col-span-6 xl:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[360px] bg-black rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 border border-stone-700/80 shadow-2xl overflow-hidden ring-1 ring-white/10">
            
            {/* Direct TikTok Iframe Embed */}
            <div className="w-full rounded-xl overflow-hidden bg-black aspect-[9/16] min-h-[560px] flex items-center justify-center">
              <iframe
                src="https://www.tiktok.com/embed/v2/7579342820360637709"
                className="w-full h-full border-0 rounded-xl bg-black"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="Parents Reaction to Williams College QuestBridge Match"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Narrative Context & Key Quotes */}
        <div className="lg:col-span-6 xl:col-span-7 space-y-4 text-stone-300">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5ED]/10 border border-[#FAF5ED]/20 text-[#FAF5ED] text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#DCC9A8]" />
            <span>The Moment That Changed Everything</span>
          </div>

          <h4 className="text-xl sm:text-2xl font-serif text-white font-light leading-snug">
            "Four years of hard work, sacrificed weekends, and uncertainty—lifted in a single second."
          </h4>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            At exactly 4:00 PM EST on December 1st, I opened the QuestBridge National College Match portal alongside my parents in our living room. Having navigated the application maze as a first-generation low-income student, discovering that Williams College funded 100% of my undergraduate education ($350,000+ full-ride scholarship) was a milestone for our entire family.
          </p>

          {/* Key Facts Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] uppercase font-semibold text-stone-400 block tracking-wider">
                Scholarship
              </span>
              <span className="text-sm font-medium text-white">
                $350K+ Full 4-Year Ride
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] uppercase font-semibold text-stone-400 block tracking-wider">
                Family Contribution
              </span>
              <span className="text-sm font-medium text-emerald-400">
                $0 Loans • $0 Tuition
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] uppercase font-semibold text-stone-400 block tracking-wider">
                Institution
              </span>
              <span className="text-sm font-medium text-white">
                Williams College '30
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] uppercase font-semibold text-stone-400 block tracking-wider">
                Channel
              </span>
              <a 
                href="https://www.tiktok.com/@ajsm3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#DCC9A8] hover:underline"
              >
                @ajsm3 on TikTok
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
