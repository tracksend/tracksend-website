"use client";

import React, { useState } from "react";
import { PhoneFrame } from "./PhoneFrame";
import { SMSPreview } from "./SMSPreview";
import { WhatsAppPreview } from "./WhatsAppPreview";
import { RCSPreview } from "./RCSPreview";
import { CampaignEditor } from "./CampaignEditor";
import { StatusIndicators } from "./StatusIndicators";

export function CampaignPreview() {
  const [activeTab, setActiveTab] = useState("sms");
  const [message, setMessage] = useState(
    "Hi there, we noticed you left some items in your cart. Use code GROWTH20 for 20% off!\nCheck out here: https://trck.sn/34ABCD",
  );
  // const [message, setMessage] = useState(
  //   "Hi {{first_name}}, we noticed you left some items in your cart. Use code GROWTH20 for 20% off!\nCheck out here: https://trck.sn/{{cart_id}}",
  // );
  const reply = "Can I use this for the premium plan?";
  const aiResponse = "Yes! The code applies to all plans, including Premium.";
  const renderPreview = () => {
    switch (activeTab) {
      case "whatsapp":
        return (
          <WhatsAppPreview
            message={message}
            reply={reply}
            aiResponse={aiResponse}
          />
        );
      case "rcs":
        return (
          <RCSPreview message={message} reply={reply} aiResponse={aiResponse} />
        );
      case "sms":
      default:
        return (
          <SMSPreview message={message} reply={reply} aiResponse={aiResponse} />
        );
    }
  };
  return (
    <div className="bg-white rounded-4xl w-full max-w-5xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
      {/* Left Panel - Editor */}
      <div className="flex-3 p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100">
        <CampaignEditor
          message={message}
          setMessage={setMessage}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {/* <div className="mt-6 w-full">
          <StatusIndicators />
        </div> */}
      </div>

      {/* Right Panel - Preview */}
      <div className="flex-2 w-full md:w-85 p-6 bg-gray-50/50 flex flex-col items-center justify-center relative">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-linear-to-tr from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <PhoneFrame>{renderPreview()}</PhoneFrame>
        </div>
      </div>
    </div>
  );
}
