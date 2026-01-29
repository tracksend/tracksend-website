import React from 'react';
import { ChevronLeft, Video } from 'lucide-react';
interface SMSPreviewProps {
  message: string;
  reply?: string;
  aiResponse?: string;
}
export function SMSPreview({ message, reply, aiResponse }: SMSPreviewProps) {
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
    <div className="flex flex-col h-full bg-black text-white font-sans text-xs">
      {/* iOS Header */}
      <div className="pt-8 pb-1.5 px-3 bg-black/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center text-blue-500">
          <ChevronLeft size={18} />
          <span className="text-xs ml-[-2px]">Back</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-[8px] font-bold mb-0.5">
            B
          </div>
          <span className="text-[9px] font-medium">Business</span>
        </div>
        <div className="text-blue-500">
          <Video size={18} />
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2.5 custom-scrollbar">
        <div className="text-center text-[8px] text-gray-500 font-medium my-1">
          Today 9:41 AM
        </div>

        {/* Business Message (Incoming) */}
        <div className="flex flex-col items-start">
          <div className="max-w-[85%] bg-[#26262a] px-3 py-1.5 rounded-2xl rounded-tl-sm text-[11px] leading-relaxed break-words whitespace-pre-wrap">
            {renderMessage(message)}
          </div>
        </div>

        {/* User Reply (Outgoing) */}
        {reply &&
        <div className="flex flex-col items-end">
            <div className="max-w-[85%] bg-[#0b84ff] px-3 py-1.5 rounded-2xl rounded-tr-sm text-[11px] leading-relaxed break-words">
              {reply}
            </div>
          </div>
        }

        {/* AI Response (Incoming Special) */}
        {aiResponse &&
        <div className="flex flex-col items-start">
            <div className="max-w-[85%] bg-cyan-900/40 border border-cyan-500/30 px-3 py-2 rounded-2xl rounded-tl-sm text-[11px] leading-relaxed relative overflow-hidden break-words">
              <div className="absolute inset-0 bg-cyan-500/5 blur-xl"></div>
              <span className="relative font-medium text-cyan-400 block mb-0.5 text-[9px] uppercase tracking-wider">
                AI Assistant
              </span>
              <span className="relative text-cyan-100 italic">
                {aiResponse}
              </span>
            </div>
          </div>
        }
      </div>

      {/* Input Area */}
      <div className="p-2 bg-[#1c1c1e] flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-[#3a3a3c] flex items-center justify-center text-gray-400">
          <span className="text-sm leading-none">+</span>
        </div>
        <div className="flex-1 h-6 rounded-full bg-[#121212] border border-[#3a3a3c] px-2 flex items-center">
          <span className="text-[10px] text-gray-500">iMessage</span>
        </div>
      </div>
    </div>);

}