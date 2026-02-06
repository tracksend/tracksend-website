import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 h-5">
              {/* <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-navy">
                <span className="material-symbols-outlined font-bold text-lg">
                  send
                </span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Tracksend
              </span> */}
              <img
                alt="Hero Background"
                className="h-auto w-40 object-fit"
                src="/tracksendlogowhite.png"
              />
            </div>
            <p className="text-gray-400 text-sm max-w-xs mb-8">
              Helping B2C brands grow with SMS and WhatsApp — from first message
              to conversion.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 text-xs uppercase tracking-widest">
              Product
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Campaigns
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Inbox
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  AI Chatbot
                </a>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 text-xs uppercase tracking-widest">
              Developers
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://tracksend.readme.io/reference/overview"
                >
                  API Docs
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://tracksend.readme.io/reference/overview"
                >
                  SDKs & Libraries
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://tracksend.readme.io/reference/overview"
                >
                  System Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 text-xs uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://www.linkedin.com/company/tracksend/"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="/terms"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="/privacy"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} Tracksend Inc.
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              London
            </div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              Durban
            </div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              Lagos
            </div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              Indianapolis
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
