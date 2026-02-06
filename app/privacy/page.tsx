"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

// export const metadata = {
//   title: "Privacy Policy - Tracksend",
//   description:
//     "Tracksend's privacy policy: how we collect, use, and protect data.",
//   robots: { index: true, follow: true },
// };

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "collection", label: "Collection of Personal Information" },
  { id: "usage", label: "Use of Demographic Data" },
  { id: "cookies", label: "Cookies" },
  { id: "principles", label: "Governing Principles" },
  { id: "sharing", label: "Sharing of Personal Information" },
  { id: "retention", label: "Personal Data Retention" },
  { id: "rights", label: "Your Privacy Rights" },
  { id: "links", label: "Links to Other Sites" },
  { id: "security", label: "Security Precautions" },
  { id: "optout", label: "Choice/Opt-Out" },
  { id: "remedies", label: "Remedies & Contact" },
  { id: "notification", label: "Notification of Changes" },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-8 gap-8">
        {/* Fixed Table of Contents Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-32 bg-linear-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-sm p-6 max-h-[calc(100vh-150px)] overflow-y-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              <h3 className="text-sm font-bold text-navy-dark uppercase tracking-wider">
                Contents
              </h3>
            </div>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                    activeSection === section.id
                      ? "bg-primary text-navy font-semibold shadow-md"
                      : "text-gray-700 hover:bg-gray-100 hover:text-navy-dark"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <article className="flex-1 max-w-4xl">
          <h1 className="text-4xl font-bold text-navy-dark mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {/* INTRODUCTION */}
          <section id="introduction" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Tracksend is thoroughly committed to protecting the privacy of our
              site visitors and customers. We fully appreciate and respect the
              importance of privacy on the Internet. We respect each visitor's
              and customer's right to personal privacy. To this end, we collect
              and use information throughout our website only as disclosed in
              this Privacy Policy.
            </p>
            <h3 className="text-xl font-semibold text-navy-dark mb-3">
              What this Privacy Policy Covers
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>How we collect information from you</li>
              <li>How we protect customers' information</li>
              <li>
                How we use the information, and share all personal information
                which you provide when you use our websites
              </li>
              <li>
                General information in line with extant laws and regulations.
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              This policy does not apply to the practices of third party agents,
              or people of which we do not exercise direct control, employment
              or management.
            </p>
            <p className="text-gray-700 font-semibold">
              By using this site, you have consented to our Privacy Policy and
              that you have the legal capacity to give consent. Otherwise, you
              may discontinue and log out at this stage.
            </p>
          </section>

          {/* COLLECTION OF PERSONALLY IDENTIFIABLE INFORMATION */}
          <section id="collection" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Collection of Personally Identifiable Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We collect personally identifiable information (including but not
              limited to email address, name, phone number, physical address,
              location, photo, banking details (when you make purchases), online
              identifiers, etc.) from you when you set up a free account with
              Tracksend. While you can browse some sections of our site without
              being a registered member, certain activities (such as placing an
              order) do require registration. We do use your contact information
              to send you offers based on your previous orders and your
              interests. The information and personal data are as freely
              provided by you to us using any technology at the material time
              e.g. JWT, web tokens etc.
            </p>
          </section>

          {/* USE OF DEMOGRAPHIC AND PROFILE DATA */}
          <section id="usage" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Use of Demographic and Profile Data
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We use personal information to provide the services you request.
              To the extent we use your personal information to market to you,
              we will provide you the ability to opt-out of such uses. We use
              your personal information to resolve disputes; troubleshoot
              problems; help promote a safe service; collect fees owed; measure
              consumer interest in our products and services, inform you about
              online and offline offers, products, services, and updates;
              customize your experience; detect and protect us against error,
              fraud and other criminal activity; enforce our terms and
              conditions; and as otherwise described to you at the time of
              collection.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              In our efforts to continually improve our product and service
              offerings, we collect and analyse demographic and profile data
              about our users' activity on our website. We identify and use your
              IP address to help diagnose problems with our server, and to
              administer our website. Your IP address is also used to help
              identify you and to gather broad demographic information. We will
              occasionally ask you to complete optional online surveys. These
              surveys may ask you for contact information and demographic
              information (like location, local government area, age, or income
              level). We use this data to tailor your experience at our site,
              providing you with content that we think you might be interested
              in–and to display content according to your preferences.
            </p>
          </section>

          {/* COOKIES */}
          <section id="cookies" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">Cookies</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We use cookies to collect information. A "cookie" is a small piece
              of information stored by a Web server on a Web browser so it can
              be later read back from that browser. Cookies are useful for
              enabling the browser to remember information specific to a given
              user. Tracksend places both permanent and temporary cookies in
              your computer's hard drive. Tracksend's cookies do not contain any
              of your personally identifiable information or private data.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We use technology in the collecting the information in order to
              make our Sites and other content or services which we make
              available to you more interesting and useful to you. For instance,
              when you come to one of our Sites via your computer or other media
              device, we may combine your visitor session information or other
              information collected through cookies, web beacons and other
              technical methods with personally identifiable information in
              order to understand and improve your online experiences and to
              determine what products, promotions and services you prefer or are
              likely to be of interest to you.
            </p>
          </section>

          {/* GOVERNING PRINCIPLES OF DATA PROCESSING */}
          <section id="principles" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Governing Principles of Data Processing
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                Your personal data on Tracksend shall be collected and processed
                in accordance with legitimate and lawful purpose consented to by
                you herein, provided that a further processing may be done only
                for archiving, scientific research, historical research or
                statistical purposes for public interest in line with extant
                regulations and laws.
              </li>
              <li>
                Personal data shall be adequate, accurate and without prejudice
                to the dignity of human person
              </li>
              <li>
                Personal data shall be stored only for the period within which
                it is reasonably needed, and shall be secured against all
                foreseeable hazards and breaches such as theft, cyberattack,
                viral attack, dissemination, manipulations of any kind, damage
                by rain, fire or exposure to other natural elements.
              </li>
              <li>
                Our data collection shall depict that we owe a duty of care to
                you.
              </li>
              <li>
                We shall be accountable in line with extant laws and
                regulations.
              </li>
            </ul>
          </section>

          {/* SHARING OF PERSONAL INFORMATION */}
          <section id="sharing" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Sharing of Personal Information
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We may share personal information with our other corporate
              entities and affiliates to: help detect and prevent identity
              theft, fraud and other potentially illegal acts; correlate related
              or multiple accounts to prevent abuse of our services; and to
              facilitate joint or co–branded services that you request where
              such services are provided by more than one corporate entity.
              Those entities and affiliates may not market to you as a result of
              such sharing unless you explicitly opt-in.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We may disclose personal information if required to do so by law
              or in the good faith belief that such disclosure is reasonably
              necessary to respond to subpoenas, court orders, or other legal
              process. We may disclose personal information to law enforcement
              offices, third party rights owners, third-party vendors,
              contractors and suppliers who perform services for us or on our
              behalf and require access to such information to do that service,
              or others in the good faith belief that such disclosure is
              reasonably necessary to: enforce our Terms or Privacy Policy;
              respond to claims that an advertisement, posting or other content
              violates the rights of a third party; or protect the rights,
              property or personal safety of our users or the general public.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tracksend and its affiliates will share some or all of your
              personal information with another business entity should we (or
              our assets) plan to merge with, or be acquired by that business
              entity. Should such a transaction occur, that other business
              entity (or the new combined entity) will be required to follow
              this privacy policy with respect to your personal information.
            </p>
          </section>

          {/* PERSONAL DATA RETENTION PERIOD */}
          <section id="retention" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Personal Data Retention Period
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Tracksend will retain your personal information only for as long
              as necessary to fulfill the purposes described in this Privacy
              Policy, unless a longer retention period is required or permitted
              by law (such as for tax, accounting, or regulatory reasons).
            </p>
            <h3 className="text-lg font-semibold text-navy-dark mb-3">
              Retention Periods:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>
                <strong>For active accounts:</strong> Personal information is
                generally retained for up to 365 days from the date of last
                activity.
              </li>
              <li>
                <strong>For inactive accounts:</strong> Personal information is
                generally retained for up to 100 days from the date the account
                becomes inactive.
              </li>
            </ul>
            <p className="text-gray-700">
              However, Tracksend.co may retain personal information for a longer
              period if it is necessary to comply with our legal obligations,
              resolve disputes, enforce our agreements, or as otherwise required
              or permitted by law.
            </p>
          </section>

          {/* YOUR PRIVACY RIGHTS */}
          <section id="rights" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              In certain circumstances as provided under the Nigeria Data
              Protection Regulation or any other applicable law, you may object
              to the processing of your personal information or request to
              delete already inputted personal data. To make this request take
              the following simple steps:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
              <li>Send an email to support@tracksend.co</li>
              <li>Title your email "delete my personal data"</li>
              <li>
                We will act upon your request in accordance with applicable data
                protection laws.
              </li>
            </ol>
            <p className="text-gray-700 font-semibold">
              With that, it is as simple as done.
            </p>
          </section>

          {/* LINKS TO OTHER SITES */}
          <section id="links" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Links to Other Sites
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our site links to other websites that may collect personally
              identifiable information about you. Tracksend is not responsible
              for the privacy practices or the content of those linked websites.
            </p>
          </section>

          {/* SECURITY PRECAUTIONS */}
          <section id="security" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Security Precautions
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our site has stringent security measures in place to protect the
              loss, misuse, and alteration of the information under our control.
              Whenever you change or access your account information, we offer
              the use of a secure server. Once your information is in our
              possession we adhere to strict security guidelines, protecting it
              against unauthorized access. However, please bear in mind that we
              cannot guarantee that the internet in itself is 100% secure and so
              we cannot take responsibility for the illegal acts of hackers as
              long as we have taken the necessary precautions.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Although we will do our best to protect your personal information,
              transmission of personal information to and from our services is
              at your own risk. You should only access our site or services
              through and within a secure environment. Most importantly, you are
              responsible for keeping your User ID and password secure and you
              should not disclose them to anyone.
            </p>
          </section>

          {/* CHOICE/OPT-OUT */}
          <section id="optout" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Choice/Opt-Out
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Tracksend provides all users with the opportunity to opt-out of
              receiving non-essential (promotional, marketing-related)
              communications from us on behalf of our partners, and from us in
              general, after setting up an account. If you want to remove your
              contact information from all Tracksend lists and newsletters,
              please email to{" "}
              <a
                href="mailto:support@tracksend.co"
                className="text-primary hover:underline font-semibold"
              >
                support@tracksend.co
              </a>
              . In the future, you can unsubscribe by clicking the one-click
              unsubscribe button located at the bottom of every email
            </p>
          </section>

          {/* REMEDIES, QUESTIONS AND CONTACT */}
          <section id="remedies" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Remedies, Questions and Contact
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If observe or have good grounds that your privacy rights have been
              infringed or likely to be infringed by the use of our Site please
              lodge your complaints or questions regarding our policy to the
              following address:{" "}
              <a
                href="mailto:support@tracksend.co"
                className="text-primary hover:underline font-semibold"
              >
                support@tracksend.co
              </a>
              . Our Data Protection Officer shall attend to them. Generally, you
              may contact us on any issue by mail to{" "}
              <a
                href="mailto:support@tracksend.co"
                className="text-primary hover:underline font-semibold"
              >
                support@tracksend.co
              </a>
              .
            </p>
          </section>

          {/* NOTIFICATION OF CHANGES */}
          <section id="notification" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Notification of Changes
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tracksend reserves the right to make changes and/or updates to
              this Privacy Policy from time to time, without prior notice, and
              the latest version on this policy will be posted on our websites.
              You are advised to view this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on our webpages.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
