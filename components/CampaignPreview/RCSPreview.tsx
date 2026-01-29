import React from 'react';
import {
  Search,
  MoreVertical,
  Image as ImageIcon,
  ShoppingBag,
  Plus,
  Mic } from
'lucide-react';
interface RCSPreviewProps {
  message: string;
  reply?: string;
  aiResponse?: string;
}
export function RCSPreview({ message, reply, aiResponse }: RCSPreviewProps) {
  const renderMessage = (text: string) => {
    return text.split(/(\{\{.*?\}\})/).map((part, index) =>
    part.match(/^\{\{.*?\}\}$/) ?
    <span key={index} className="text-blue-300 font-medium">
          {part}
        </span> :

    part

    );
  };
  return (
    <div className="flex flex-col h-full bg-[#131314] text-[#e3e3e3] font-sans text-xs">
      {/* Google Messages Header */}
      <div className="pt-8 pb-2 px-3 flex items-center justify-between bg-[#131314] z-10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-[9px] font-medium text-white">
            B
          </div>
          <span className="text-sm font-normal">Business</span>
        </div>
        <div className="flex items-center gap-4 text-[#e3e3e3]">
          <Search size={18} />
          <MoreVertical size={18} />
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4 custom-scrollbar">
        <div className="text-center text-[9px] text-[#c4c7c5] font-medium">
          RCS chat with Business
        </div>

        {/* Rich Card (Incoming) */}
        <div className="flex flex-col items-start">
          <div className="max-w-[95%] bg-[#303030] rounded-xl overflow-hidden shadow-md border border-gray-800">
            {/* Rich Media Header */}
            <div className="h-20 bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center relative">
              <ShoppingBag size={28} className="text-white/20" />
              <div className="absolute bottom-2 left-2">
                <span className="text-[9px] font-bold text-white bg-black/30 px-1.5 py-0.5 rounded backdrop-blur-sm">
                  20% OFF
                </span>
              </div>
            </div>

            <div className="p-3">
              <h3 className="font-bold text-[11px] mb-1 text-white">
                Items in your cart
              </h3>
              <p className="text-[10px] text-[#e3e3e3] leading-relaxed mb-2 break-words whitespace-pre-wrap">
                {renderMessage(message)}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-1.5 mt-2">
                <button className="w-full py-1.5 bg-[#a8c7fa] text-[#062e6f] rounded-full text-[10px] font-medium flex items-center justify-center gap-1">
                  <ShoppingBag size={12} />
                  View Cart
                </button>
                <button className="w-full py-1.5 bg-transparent border border-[#8e918f] text-[#e3e3e3] rounded-full text-[10px] font-medium">
                  Ignore
                </button>
              </div>
            </div>
          </div>
          <span className="text-[8px] text-[#c4c7c5] mt-1 ml-2">
            9:41 AM • Read
          </span>
        </div>

        {/* User Reply (Outgoing) */}
        {reply &&
        <div className="flex flex-col items-end">
            <div className="max-w-[85%] bg-[#0b57d0] px-3 py-2 rounded-xl rounded-tr-sm text-[11px] leading-relaxed text-white break-words">
              {reply}
            </div>
            <span className="text-[8px] text-[#c4c7c5] mt-1 mr-2">
              9:42 AM • Delivered
            </span>
          </div>
        }

        {/* AI Response (Incoming) */}
        {aiResponse &&
        <div className="flex flex-col items-start">
            <div className="flex items-center gap-1.5 mb-1 ml-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500 flex items-center justify-center">
                <span className="text-[6px] text-black font-bold">AI</span>
              </div>
              <span className="text-[9px] text-cyan-400 font-medium">
                Assistant
              </span>
            </div>
            <div className="max-w-[85%] bg-[#303030] px-3 py-2 rounded-xl rounded-tl-sm text-[11px] leading-relaxed text-[#e3e3e3] border border-cyan-500/30 break-words">
              {aiResponse}
            </div>
          </div>
        }
      </div>

      {/* Input Area */}
      <div className="p-2 bg-[#131314] flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-[#303030] flex items-center justify-center text-[#e3e3e3]">
          <Plus size={16} />
        </div>
        <div className="flex-1 bg-[#303030] rounded-full h-8 px-3 flex items-center justify-between">
          <span className="text-[10px] text-[#c4c7c5]">RCS message</span>
          <ImageIcon size={16} className="text-[#c4c7c5]" />
        </div>
        <div className="w-7 h-7 rounded-full bg-[#303030] flex items-center justify-center text-[#e3e3e3]">
          <Mic size={16} />
        </div>
      </div>
    </div>);

}