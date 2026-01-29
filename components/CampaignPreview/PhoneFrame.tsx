import React from 'react';
import { Battery, Signal, Wifi } from 'lucide-react';
interface PhoneFrameProps {
  children: React.ReactNode;
  statusBarColor?: string;
}
export function PhoneFrame({
  children,
  statusBarColor = 'text-white'
}: PhoneFrameProps) {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-900 border-[10px] rounded-[2rem] h-[480px] w-[240px] shadow-xl flex flex-col overflow-hidden ring-1 ring-gray-900/50">
      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 inset-x-0 h-5 bg-gray-900 z-50 flex justify-center">
        <div className="h-3 w-20 bg-black rounded-b-lg absolute top-0" />
      </div>

      {/* Status Bar */}
      <div
        className={`absolute top-1.5 left-0 right-0 px-4 z-40 flex justify-between items-center text-[8px] font-medium ${statusBarColor}`}>

        <span>9:41</span>
        <div className="flex items-center gap-0.5">
          <Signal size={10} />
          <Wifi size={10} />
          <Battery size={10} />
        </div>
      </div>

      {/* Screen Content */}
      <div className="flex-1 w-full h-full overflow-hidden bg-black relative">
        {children}
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full z-50" />
    </div>);

}