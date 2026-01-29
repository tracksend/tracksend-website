import React from 'react';
import {
  ArrowLeft,
  Phone,
  Video,
  MoreVertical,
  CheckCheck,
  Camera,
  Mic,
  Plus } from
'lucide-react';
interface WhatsAppPreviewProps {
  message: string;
  reply?: string;
  aiResponse?: string;
}
export function WhatsAppPreview({
  message,
  reply,
  aiResponse
}: WhatsAppPreviewProps) {
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
    <div className="flex flex-col h-full bg-[#0b141a] text-[#e9edef] font-sans text-xs relative">
      {/* WhatsApp Wallpaper Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
          'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")',
          backgroundSize: '300px'
        }}>
      </div>

      {/* Header */}
      <div className="pt-7 pb-1.5 px-2 bg-[#1f2c34] flex items-center justify-between z-10 shadow-sm">
        <div className="flex items-center gap-1.5">
          <ArrowLeft size={16} className="text-[#aebac1]" />
          <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center text-[9px] font-bold text-white">
            B
          </div>
          <div className="flex flex-col ml-0.5">
            <span className="text-[11px] font-medium leading-tight">
              Business
            </span>
            <span className="text-[8px] text-[#aebac1]">online</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[#aebac1] pr-1">
          <Video size={16} />
          <Phone size={14} />
          <MoreVertical size={14} />
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 z-10 custom-scrollbar">
        <div className="flex justify-center mb-2">
          <span className="bg-[#1f2c34] text-[#8696a0] text-[8px] px-2 py-0.5 rounded-md shadow-sm uppercase font-medium tracking-wide">
            Today
          </span>
        </div>

        {/* Business Message (Incoming) */}
        <div className="flex flex-col items-start">
          <div className="max-w-[85%] bg-[#1f2c34] p-2 pl-2.5 rounded-lg rounded-tl-none text-[11px] shadow-sm relative break-words whitespace-pre-wrap">
            {/* Tail */}
            <div className="absolute top-0 -left-1.5 w-0 h-0 border-t-[8px] border-t-[#1f2c34] border-l-[8px] border-l-transparent"></div>

            <div className="mb-0.5 leading-relaxed">
              {renderMessage(message)}
            </div>
            <div className="flex justify-end items-center gap-1 mt-0.5">
              <span className="text-[8px] text-[#8696a0]">9:41 AM</span>
            </div>
          </div>
        </div>

        {/* User Reply (Outgoing) */}
        {reply &&
        <div className="flex flex-col items-end">
            <div className="max-w-[85%] bg-[#005c4b] p-2 pl-2.5 rounded-lg rounded-tr-none text-[11px] shadow-sm relative text-white break-words">
              {/* Tail */}
              <div className="absolute top-0 -right-1.5 w-0 h-0 border-t-[8px] border-t-[#005c4b] border-r-[8px] border-r-transparent scale-x-[-1]"></div>

              <div className="mb-0.5 leading-relaxed">{reply}</div>
              <div className="flex justify-end items-center gap-1 mt-0.5">
                <span className="text-[8px] text-[#8696a0] opacity-80">
                  9:42 AM
                </span>
                <CheckCheck size={12} className="text-[#53bdeb]" />
              </div>
            </div>
          </div>
        }

        {/* AI Response (Incoming) */}
        {aiResponse &&
        <div className="flex flex-col items-start">
            <div className="max-w-[85%] bg-[#1f2c34] p-2 pl-2.5 rounded-lg rounded-tl-none text-[11px] shadow-sm relative border-l-2 border-cyan-500 break-words">
              <div className="mb-0.5 leading-relaxed">
                <span className="text-[9px] font-bold text-cyan-400 block mb-0.5">
                  AI Assistant
                </span>
                <span className="italic text-gray-300">{aiResponse}</span>
              </div>
              <div className="flex justify-end items-center gap-1 mt-0.5">
                <span className="text-[8px] text-[#8696a0]">9:42 AM</span>
              </div>
            </div>
          </div>
        }
      </div>

      {/* Input Area */}
      <div className="p-1.5 bg-[#1f2c34] flex items-center gap-1.5 z-10">
        <Plus size={16} className="text-[#8696a0]" />
        <div className="flex-1 bg-[#2a3942] rounded-lg h-7 px-2 flex items-center">
          <span className="text-[10px] text-[#8696a0]">Message</span>
        </div>
        <Camera size={16} className="text-[#8696a0]" />
        <Mic size={16} className="text-[#8696a0]" />
      </div>
    </div>);

}