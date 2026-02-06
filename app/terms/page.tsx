"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

// export const metadata = {
//   title: "Terms of Service - Tracksend",
//   description: "Terms and conditions for using Tracksend services.",
//   robots: { index: true, follow: true },
// };

const sections = [
  { id: "introduction", label: "Welcome" },
  { id: "cookies", label: "Cookies" },
  { id: "license", label: "License" },
  { id: "hyperlinking", label: "Hyperlinking to Our Content" },
  { id: "iframes", label: "Iframes" },
  { id: "liability", label: "Content Liability" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "registration", label: "Account & Registration Obligations" },
  { id: "communications", label: "Communications" },
  { id: "reservation", label: "Reservation of Rights" },
  { id: "removal", label: "Removal of Links" },
  { id: "disclaimer", label: "Disclaimer" },
];

export default function TermsPage() {
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
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-32 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-sm p-6 max-h-[calc(100vh-150px)] overflow-y-auto">
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
            Terms of Service
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
            <h2 className="text-2xl font-bold text-navy-dark mb-4">Welcome</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Welcome to Tracksend by Prowedge Limited! These terms and
              conditions outline the rules and regulations for the use of
              Tracksend's Website, located at https://tracksend.co.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              By accessing this website we assume you accept these terms and
              conditions. Do not continue to use Tracksend Website if you do not
              agree to take all of the terms and conditions stated on this page.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and all Agreements:
              "Client", "You" and "Your" refers to you, the person log on this
              website and compliant to the Company's terms and conditions. "The
              Company", "Ourselves", "We", "Our" and "Us", refers to our
              Company. "Party", "Parties", or "Us", refers to both the Client
              and ourselves.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All terms refer to the offer, acceptance, and consideration of
              payment necessary to undertake the process of our assistance to
              the Client in the most appropriate manner for the express purpose
              of meeting the Client's needs in respect of provision of the
              Company's stated services, in accordance with and subject to,
              prevailing law of Netherlands. Any use of the above terminology or
              other words in the singular, plural, capitalization and/or he/she
              or they, are taken as interchangeable and therefore as referring
              to same.
            </p>
          </section>

          {/* COOKIES */}
          <section id="cookies" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">Cookies</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We employ the use of cookies. By accessing Tracksend Website, you
              agreed to use cookies in agreement with the Tracksend's Privacy
              Policy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Most interactive websites use cookies to let us retrieve the
              user's details for each visit. Cookies are used by our website to
              enable the functionality of certain areas to make it easier for
              people visiting our website. Some of our affiliate/advertising
              partners may also use cookies.
            </p>
          </section>

          {/* LICENSE */}
          <section id="license" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">License</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Unless otherwise stated, Tracksend and/or its licensors own the
              intellectual property rights for all material on Tracksend
              Website. All intellectual property rights are reserved. You may
              access this from Tracksend Website for your own personal use
              subjected to restrictions set in these terms and conditions.
            </p>
            <h3 className="text-lg font-semibold text-navy-dark mb-3">
              You must not:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Republish material from Tracksend Website</li>
              <li>Sell, rent or sub-license material from Tracksend Website</li>
              <li>
                Reproduce, duplicate or copy material from Tracksend Website
              </li>
              <li>Redistribute content from Tracksend Website</li>
            </ul>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This Agreement shall begin on the date hereof. Parts of this
              website offer an opportunity for users to post and exchange
              opinions and information in certain areas of the website.
              Tracksend does not filter, edit, publish or review Comments prior
              to their presence on the website. Comments do not reflect the
              views and opinions of Tracksend, its agents and/or affiliates.
              Comments reflect the views and opinions of the person who post
              their views and opinions. To the extent permitted by applicable
              laws, Tracksend shall not be liable for the Comments or for any
              liability, damages or expenses caused and/or suffered as a result
              of any use of and/or posting of and/or appearance of the Comments
              on this website.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Prowedge reserves the right to monitor all Comments and to remove
              any Comments which can be considered inappropriate, offensive or
              causes breach of these Terms and Conditions. You warrant and
              represent that:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                You are entitled to post the Comments on our website and have
                all necessary licenses and consents to do so
              </li>
              <li>
                The Comments do not invade any intellectual property right,
                including without limitation copyright, patent or trademark of
                any third party
              </li>
              <li>
                The Comments do not contain any defamatory, libelous, offensive,
                indecent or otherwise unlawful material which is an invasion of
                privacy
              </li>
              <li>
                The Comments will not be used to solicit or promote business or
                custom or present commercial activities or unlawful activity
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              You hereby grant Tracksend a non-exclusive license to use,
              reproduce, edit and authorize others to use, reproduce and edit
              any of your Comments in any and all forms, formats or media.
            </p>
          </section>

          {/* HYPERLINKING TO OUR CONTENT */}
          <section id="hyperlinking" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Hyperlinking to Our Content
            </h2>
            <h3 className="text-lg font-semibold text-navy-dark mb-3">
              The following organizations may link to our Website without prior
              written approval:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Government agencies</li>
              <li>Search engines</li>
              <li>News organizations</li>
              <li>
                Online directory distributors may link to our Website in the
                same manner as they hyperlink to the Websites of other listed
                businesses
              </li>
              <li>
                System-wide Accredited Businesses except soliciting non-profit
                organizations, charity shopping malls, and charity fundraising
                groups which may not hyperlink to our Web site
              </li>
            </ul>
            <p className="text-gray-700 mb-4 leading-relaxed">
              These organizations may link to our home page, to publications, or
              to other Website information so long as the link: (a) is not in
              any way deceptive; (b) does not falsely imply sponsorship,
              endorsement or approval of the linking party and its products
              and/or services; and (c) fits within the context of the linking
              party's site.
            </p>
            <h3 className="text-lg font-semibold text-navy-dark mb-3 mt-6">
              We may consider and approve other link requests from the following
              types of organizations:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>
                commonly-known consumer and/or business information sources
              </li>
              <li>dot.com community sites</li>
              <li>associations or other groups representing charities</li>
              <li>online directory distributors</li>
              <li>internet portals</li>
              <li>accounting, law and consulting firms</li>
              <li>educational institutions and trade associations</li>
            </ul>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We will approve link requests from these organizations if we
              decide that: (a) the link would not make us look unfavorably to
              ourselves or to our accredited businesses; (b) the organization
              does not have any negative records with us; (c) the benefit to us
              from the visibility of the hyperlink compensates the absence of
              Tracksend; and (d) the link is in the context of general resource
              information.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you are one of the organizations listed above and are
              interested in linking to our website, you must inform us by
              sending an e-mail to Tracksend. Please include your name, your
              organization name, contact information as well as the URL of your
              site, a list of any URLs from which you intend to link to our
              Website, and a list of the URLs on our site to which you would
              like to link. Wait 2-3 weeks for a response.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Approved organizations may hyperlink to our Website as follows: by
              use of our corporate name; by use of the uniform resource locator
              being linked to; or by use of any other description of our Website
              being linked to that makes sense within the context and format of
              content on the linking party's site. No use of Tracksend's logo or
              other artwork will be allowed for linking absent a trademark
              license agreement.
            </p>
          </section>

          {/* IFRAMES */}
          <section id="iframes" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">Iframes</h2>
            <p className="text-gray-700 leading-relaxed">
              Without prior approval and written permission, you may not create
              frames around our Webpages that alter in any way the visual
              presentation or appearance of our Website.
            </p>
          </section>

          {/* CONTENT LIABILITY */}
          <section id="liability" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Content Liability
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We shall not be hold responsible for any content that appears on
              your Website. You agree to protect and defend us against all
              claims that is rising on your Website. No link(s) should appear on
              any Website that may be interpreted as libelous, obscene or
              criminal, or which infringes, otherwise violates, or advocates the
              infringement or other violation of, any third party rights.
            </p>
          </section>

          {/* PRIVACY POLICY */}
          <section id="privacy" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Privacy Policy
            </h2>
            <p className="text-gray-700">
              Please read our{" "}
              <a
                href="/privacy"
                className="text-primary hover:underline font-semibold"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          {/* ACCOUNT AND REGISTRATION OBLIGATIONS */}
          <section id="registration" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Account and Registration Obligations
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you use Tracksend, you shall be responsible for maintaining the
              confidentiality of your User ID and Password and you shall be
              responsible for all activities that occur under your User ID and
              Password. You agree that if you provide any information that is
              untrue, inaccurate, not current or incomplete that Tracksend has
              reasonable grounds to suspect that such information is untrue,
              inaccurate, not current or incomplete, or not in accordance with
              this Terms of Use, Tracksend has the right to indefinitely suspend
              or terminate or block access of your membership with Tracksend and
              refuse to provide you with access to the Website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You will be required to enter a valid phone number while
              registering on Tracksend. By registering your phone number with
              us, you consent to be contacted by Tracksend via phone calls and /
              or SMS notifications, in case of any product-related updates.
            </p>
          </section>

          {/* COMMUNICATIONS */}
          <section id="communications" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Communications
            </h2>
            <p className="text-gray-700 leading-relaxed">
              When You use the Website or send emails, phone numbers or other
              data, information or communication to Tracksend, You agree and
              understand that You are communicating with Tracksend through
              electronic records and You consent to receive communications via
              electronic records from Tracksend periodically. Tracksend may
              communicate with You by email, SMS or by such other mode of
              communication, electronic or otherwise.
            </p>
          </section>

          {/* RESERVATION OF RIGHTS */}
          <section id="reservation" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Reservation of Rights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to request that you remove all links or any
              particular link to our Website. You approve to immediately remove
              all links to our Website upon request. We also reserve the right
              to amend these terms and conditions and its linking policy at any
              time. By continuously linking to our Website, you agree to be
              bound to and follow these linking terms and conditions.
            </p>
          </section>

          {/* REMOVAL OF LINKS FROM OUR WEBSITE */}
          <section id="removal" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Removal of Links From Our Website
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you find any link on our Website that is offensive for any
              reason, you are free to contact and inform us any moment. We will
              consider requests to remove links but we are not obligated to or
              so or to respond to you directly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do not ensure that the information on this website is correct,
              we do not warrant its completeness or accuracy; nor do we promise
              to ensure that the website remains available or that the material
              on the website is kept up to date.
            </p>
          </section>

          {/* DISCLAIMER */}
          <section id="disclaimer" className="mb-10 scroll-mt-32">
            <h2 className="text-2xl font-bold text-navy-dark mb-4">
              Disclaimer
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties, and conditions relating to our
              website and the use of this website. Nothing in this disclaimer
              will:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>
                limit or exclude our or your liability for death or personal
                injury
              </li>
              <li>
                limit or exclude our or your liability for fraud or fraudulent
                misrepresentation
              </li>
              <li>
                limit any of our or your liabilities in any way that is not
                permitted under applicable law
              </li>
              <li>
                exclude any of our or your liabilities that may not be excluded
                under applicable law
              </li>
            </ul>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The limitations and prohibitions of liability set in this Section
              and elsewhere in this disclaimer: (a) are subject to the preceding
              paragraph; and (b) govern all liabilities arising under the
              disclaimer, including liabilities arising in contract, in tort and
              for breach of statutory duty.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As long as the website and the information and services on the
              website are provided free of charge, we will not be liable for any
              loss or damage to any nature.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
