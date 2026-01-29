import React, { useState } from "react";
import "./globals.css";
// import { rephraseMessage } from '../services/geminiService';

export const CampaignDemo: React.FC = () => {
  const [channel, setChannel] = useState<"SMS" | "WhatsApp" | "RCS">("SMS");
  const [message, setMessage] = useState(
    "Hi {{first_name}}, we noticed you left some items in your cart. Use code GROWTH20 for 20% off! \nCheck out here: https://trck.sn/{{cart_id}}",
  );
  const [isRephrasing, setIsRephrasing] = useState(false);

  //   const handleAIRephrase = async () => {
  //     setIsRephrasing(true);
  //     const newText = await rephraseMessage(message, 'persuasive');
  //     setMessage(newText);
  //     setIsRephrasing(false);
  //   };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-float overflow-hidden grid lg:grid-cols-5 min-h-125">
      {/* Editor Section */}
      <div className="lg:col-span-3 p-10 border-b lg:border-b-0 lg:border-r border-gray-100 bg-gray-50/30 text-left flex flex-col">
        <div className="flex items-center justify-between mb-10">
          <div className="flex p-1 bg-white rounded-xl shadow-sm border border-gray-100">
            {(["SMS", "WhatsApp", "RCS"] as const).map((ch) => (
              <button
                key={ch}
                onClick={() => setChannel(ch)}
                className={`px-5 py-2 text-xs font-bold rounded-lg transition-all ${channel === ch ? "bg-navy text-white" : "text-gray-500 hover:text-navy"}`}
              >
                {ch}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <span className="px-2 py-1 rounded bg-green-100 text-[10px] font-bold text-green-700 tracking-wider">
              LIVE
            </span>
            <span className="px-2 py-1 rounded bg-blue-100 text-[10px] font-bold text-blue-700 tracking-wider">
              TRACKING ON
            </span>
          </div>
        </div>

        <div className="flex-1 space-y-8">
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                Campaign Template
              </label>
              <button
                // onClick={handleAIRephrase}
                disabled={isRephrasing}
                className={`text-[11px] font-bold flex items-center gap-1.5 transition-colors ${isRephrasing ? "text-gray-300" : "text-primary hover:text-navy"}`}
              >
                <span
                  className={`material-symbols-outlined text-sm ${isRephrasing ? "animate-spin" : ""}`}
                >
                  auto_fix_high
                </span>
                {isRephrasing ? "AI Rephrasing..." : "AI Rephrase"}
              </button>
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full min-h-40 p-6 bg-white border border-gray-200 rounded-2xl text-[15px] text-navy-dark leading-relaxed focus:ring-primary focus:border-primary shadow-sm"
              placeholder="Type your campaign message..."
            />
          </div>

          {/* <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-gray-400 uppercase mb-1">
                Previewing As
              </span>
              <span className="text-xs font-medium text-navy-dark italic">
                Abandoned Cart Recovery
              </span>
            </div>
            <button className="bg-secondary text-white px-8 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-secondary/20">
              Send Preview{" "}
              <span className="material-symbols-outlined text-lg">
                rocket_launch
              </span>
            </button>
          </div> */}
        </div>
      </div>

      {/* Preview Section */}
      <div className="lg:col-span-2 p-10 bg-white flex flex-col items-center justify-center">
        <div className="relative w-full max-w-70 aspect-[9/18.5] bg-navy-dark rounded-[3rem] border-8 border-gray-800 p-5 shadow-2xl overflow-hidden mb-10 flex flex-col">
          {/* Phone Notch */}
          <div className="bg-gray-800 w-24 h-5 rounded-full mx-auto mb-8"></div>

          <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar">
            {/* Model Turn */}
            <div className="bg-white/10 p-4 rounded-2xl rounded-bl-none border border-white/5">
              <p className="text-[11px] text-white leading-relaxed font-medium">
                {message.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>

            {/* User Turn */}
            <div className="bg-gray-700 p-4 rounded-2xl rounded-br-none ml-8 border border-white/5">
              <p className="text-[11px] text-white">
                Can I use this for the premium plan?
              </p>
            </div>

            {/* AI Assistant response */}
            <div className="bg-primary p-4 rounded-2xl rounded-bl-none shadow-glow-cyan">
              <p className="text-[11px] text-navy font-bold leading-relaxed italic">
                AI Assistant: Yes! The code applies to all plans, including
                Premium.
              </p>
            </div>
          </div>
        </div>

        {/* Tracking Steps */}
        <div className="flex items-center justify-between w-full max-w-[320px] relative px-2">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

          {[
            { label: "Sent", icon: "done", color: "bg-green-500" },
            { label: "Clicked", icon: "mouse", color: "bg-blue-500" },
            { label: "Follow-up", icon: "cached", color: "bg-purple-500" },
            {
              label: "AI Handled",
              icon: "smart_toy",
              color: "bg-primary",
              active: true,
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="z-10 flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div
                className={`w-8 h-8 rounded-full ${step.color} ${step.active ? "text-navy shadow-lg shadow-primary/20" : "text-white"} flex items-center justify-center transition-transform group-hover:scale-110`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  {step.icon}
                </span>
              </div>
              <span
                className={`text-[10px] font-bold ${step.active ? "text-navy-dark" : "text-gray-400"}`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
