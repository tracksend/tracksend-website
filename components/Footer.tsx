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
                className="h-auto w-50 object-fit -translate-x-8"
                src="/tracksendlogowhite.png"
              />
            </div>
            <p className="text-gray-400 text-sm max-w-xs mb-8">
              Building the future of human-centric B2B communications. Let's
              grow together.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 text-xs uppercase tracking-widest">
              Product
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Messaging API
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  WhatsApp Flows
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
                <a className="hover:text-primary transition-colors" href="#">
                  API Docs
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  SDKs & Libraries
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
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
                <a className="hover:text-primary transition-colors" href="#">
                  Our Story
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Contact
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
              Johannesburg
            </div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              Lagos
            </div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              San Francisco
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
