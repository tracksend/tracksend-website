import React from "react";
import { Sparkles, Edit3 } from "lucide-react";
import { StatusIndicators } from "./StatusIndicators";
interface CampaignEditorProps {
  message: string;
  setMessage: (msg: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
export function CampaignEditor({
  message,
  setMessage,
  activeTab,
  setActiveTab,
}: CampaignEditorProps) {
  const tabs = [
    {
      id: "sms",
      label: "SMS",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
    },
    {
      id: "rcs",
      label: "RCS",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="bg-gray-100 p-1 rounded-lg inline-flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${activeTab === tab.id ? "bg-gray-900 text-white shadow-md" : "text-gray-500 hover:text-gray-700 hover:bg-gray-200"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase tracking-wider">
            Live
          </span>
          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded uppercase tracking-wider">
            Tracking On
          </span>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Campaign Playground (Type a message in the box)
        </h2>
        {/* <button className="flex items-center gap-1 text-cyan-500 hover:text-cyan-600 transition-colors text-xs font-bold">
          <Sparkles size={14} />
          AI Rephrase
        </button> */}
      </div>

      <div className="relative group">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-44 p-4 bg-white border-2 border-gray-100 rounded-xl text-gray-700 text-sm leading-relaxed resize-none focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50 transition-all shadow-sm hide-scrollbar"
          spellCheck={false}
        />

        <div className="absolute bottom-3 right-3 text-gray-300 pointer-events-none">
          <Edit3 size={14} />
        </div>
      </div>

      {/* <div className="mt-3 text-[10px] text-gray-400 flex gap-2 flex-wrap">
        <span>Variables:</span>
        <span className="text-blue-500 font-medium bg-blue-50 px-1.5 py-0.5 rounded">
          {"{{first_name}}"}
        </span>
        <span className="text-blue-500 font-medium bg-blue-50 px-1.5 py-0.5 rounded">
          {"{{cart_id}}"}
        </span>
      </div> */}
      <div className="mt-6 w-full">
        <StatusIndicators />
      </div>
    </div>
  );
}
