import React from 'react';
import { CheckCircle2, MousePointerClick, RefreshCw, Bot } from 'lucide-react';
export function StatusIndicators() {
  const steps = [
  {
    icon: CheckCircle2,
    label: 'Sent',
    color: 'text-green-500',
    bg: 'bg-green-500/10'
  },
  {
    icon: MousePointerClick,
    label: 'Clicked',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    icon: RefreshCw,
    label: 'Follow-up',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  },
  {
    icon: Bot,
    label: 'AI Handled',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10'
  }];

  return (
    <div className="flex items-center justify-between w-full max-w-xs mx-auto px-2">
      {steps.map((step, index) =>
      <div
        key={index}
        className="flex flex-col items-center gap-1.5 cursor-default">

          <div
          className={`w-8 h-8 rounded-full ${step.bg} ${step.color} flex items-center justify-center`}>

            <step.icon size={16} />
          </div>
          <span className="text-[9px] font-medium text-gray-500">
            {step.label}
          </span>
        </div>
      )}
    </div>);

}