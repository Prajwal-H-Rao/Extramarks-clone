import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Extramarks_Logo.jpg";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white w-full mx-auto px-4 py-8 font-sans relative">
      {/* Logo */}
      <div className="text-center mb-6">
        <img src={logo} alt="Extramarks Logo" className="w-40 mx-auto" />
      </div>

      {/* Main Navigation */}
      <div className="flex justify-center flex-wrap gap-5 py-3 border-b border-gray-700 mb-8">
        <Link
          to="/smart-class-plus"
          className="text-white hover:text-yellow-500 text-sm px-2 py-1 transition-colors"
        >
          Smart Class Plus
        </Link>
        <Link
          to="/school-integrated-program"
          className="text-white hover:text-yellow-500 text-sm px-2 py-1 transition-colors"
        >
          School Integrated Program
        </Link>
        <Link
          to="/learning-app"
          className="text-white hover:text-yellow-500 text-sm px-2 py-1 transition-colors"
        >
          Learning App
        </Link>
        <Link
          to="/teaching-app"
          className="text-white hover:text-yellow-500 text-sm px-2 py-1 transition-colors"
        >
          Teaching App
        </Link>
        <Link
          to="/jee-prep"
          className="text-white hover:text-yellow-500 text-sm px-2 py-1 transition-colors"
        >
          JEE Prep
        </Link>
        <Link
          to="/neet-prep"
          className="text-white hover:text-yellow-500 text-sm px-2 py-1 transition-colors"
        >
          NEET Prep
        </Link>
      </div>

      {/* Footer Content */}
      <div className="flex flex-wrap justify-between gap-8">
        {/* Column 1: NCERT Solutions */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-yellow-500 mb-4 text-base font-normal">
            NCERT Solutions
          </h3>
          <ul className="space-y-2">
            {[12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((num) => (
              <li key={`ncert-${num}`}>
                <Link
                  to={`/ncert-solutions/class-${num}`}
                  className="text-white hover:text-yellow-500 text-sm transition-colors"
                >
                  NCERT Solutions for Class {num}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="text-yellow-500 mt-6 mb-4 text-base font-normal">
            Solved Board Papers
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/solved-board-papers/cbse"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                Solved Board Paper CBSE
              </Link>
            </li>
            <li>
              <Link
                to="/solved-board-papers/icse"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                Solved Board Paper ICSE
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: CBSE and ICSE Classes */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-yellow-500 mb-4 text-base font-normal">
            CBSE Class
          </h3>
          <ul className="space-y-2">
            {[12, 11, 10, 9, 8, 7, 6].map((num) => (
              <li key={`cbse-${num}`}>
                <Link
                  to={`/cbse/class-${num}`}
                  className="text-white hover:text-yellow-500 text-sm transition-colors"
                >
                  CBSE Class {num}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="text-yellow-500 mt-6 mb-4 text-base font-normal">
            ICSE Class
          </h3>
          <ul className="space-y-2">
            {[12, 11, 10, 9, 8, 7, 6].map((num) => (
              <li key={`icse-${num}`}>
                <Link
                  to={`/icse/class-${num}`}
                  className="text-white hover:text-yellow-500 text-sm transition-colors"
                >
                  ICSE Class {num}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Sample Papers */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-yellow-500 mb-4 text-base font-normal">
            Sample Paper
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/sample-papers/cbse"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                Sample Paper CBSE
              </Link>
            </li>
            <li>
              <Link
                to="/sample-papers/icse"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                Sample Paper ICSE
              </Link>
            </li>
          </ul>

          <h3 className="text-yellow-500 mt-6 mb-4 text-base font-normal">
            Exam Weightage
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/exam-weightage/cbse"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                Exam Weightage CBSE
              </Link>
            </li>
          </ul>

          <h3 className="text-yellow-500 mt-6 mb-4 text-base font-normal">
            Board Paper Solution 2020
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/board-paper-solutions/cbse/class-12"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                CBSE Class 12 Solution
              </Link>
            </li>
            <li>
              <Link
                to="/board-paper-solutions/cbse/class-10"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                CBSE Class 10 Solution
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Test Prep */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-yellow-500 mb-4 text-base font-normal">
            Test Prep
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/test-prep/engineering"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                Engineering
              </Link>
            </li>
            <li>
              <Link
                to="/test-prep/medical"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                Medical
              </Link>
            </li>
            <li>
              <Link
                to="/test-prep/neet-preparation-pack"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                NEET Preparation Pack
              </Link>
            </li>
            <li>
              <Link
                to="/test-prep/jee-preparation-pack"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                JEE Preparation Pack
              </Link>
            </li>
            <li>
              <Link
                to="/test-prep/test-series"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                Test Series
              </Link>
            </li>
            <li>
              <Link
                to="/test-prep/sat"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                SAT
              </Link>
            </li>
            <li>
              <Link
                to="/test-prep/psat"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                PSAT
              </Link>
            </li>
            <li>
              <Link
                to="/test-prep/toefl"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                TOEFL
              </Link>
            </li>
          </ul>

          <h3 className="text-yellow-500 mt-6 mb-4 text-base font-normal">
            Other Services
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/services/cap"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                CAP
              </Link>
            </li>
            <li>
              <Link
                to="/services/mit"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                MIT
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5: About Us */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-yellow-500 mb-4 text-base font-normal">
            About Us
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about/contact"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/about/careers"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/about/faq"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/about/blog"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>

          <h3 className="text-yellow-500 mt-6 mb-4 text-base font-normal">
            Terms & Conditions
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/legal/terms"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                to="/legal/privacy"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/legal/child-safety"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                Child Safety
              </Link>
            </li>
            <li>
              <Link
                to="/legal/ewaste"
                className="text-white hover:text-yellow-500 text-sm transition-colors"
              >
                E-waste Recycling Program
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* App Store Links */}
      <div className="flex justify-end gap-4 mt-8 flex-wrap">
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/google-play.png"
            alt="Google Play Store"
            className="h-10"
          />
        </a>
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/app-store.png" alt="Apple App Store" className="h-10" />
        </a>
      </div>

      {/* Scroll to top button */}
      <Link
        to="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="bg-yellow-500 text-white w-10 h-10 rounded-full flex justify-center items-center fixed bottom-5 right-5 text-xl"
      >
        ↑
      </Link>
    </div>
  );
};

export default Footer;
