import React from 'react';
import { SOCIAL_LINKS } from '../utils/constants';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 leading-tight">
              Privacy <span className="text-[#c9a870]">Policy</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
              Last Updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-[#1a1a1a] rounded-[20px] p-8 sm:p-10 md:p-12 space-y-8">
            
            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                1. Introduction
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                Juris Associates ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our legal services. By using our website, you consent to the data practices described in this policy.
              </p>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                2. Information We Collect
              </h2>
              <div className="space-y-4 text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                <div>
                  <h3 className="text-white font-semibold mb-2">2.1 Personal Information</h3>
                  <p>We may collect personal information that you voluntarily provide to us when you:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Contact us through our website forms</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Request legal consultation or services</li>
                    <li>Communicate with us via email or phone</li>
                  </ul>
                  <p className="mt-2">This information may include: name, email address, phone number, postal address, and details about your legal matter.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">2.2 Automatically Collected Information</h3>
                  <p>When you visit our website, we automatically collect certain information about your device, including:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Pages you visit on our website</li>
                    <li>Time and date of your visit</li>
                    <li>Referring website addresses</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 text-[15px] sm:text-[16px]">
                <li>To provide legal services and respond to your inquiries</li>
                <li>To communicate with you about our services</li>
                <li>To send you newsletters and legal updates (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 text-[15px] sm:text-[16px]">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With service providers who assist us in operating our website (under strict confidentiality agreements)</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                5. Data Security
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                6. Your Rights
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 text-[15px] sm:text-[16px]">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Withdraw consent for data processing</li>
                <li>File a complaint with relevant data protection authorities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. However, disabling cookies may limit certain website functionalities.
              </p>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                8. Third-Party Links
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                9. Children's Privacy
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                11. Contact Us
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-[#0f0f0f] rounded-lg p-6 space-y-2">
                <p className="text-gray-300"><strong className="text-white">Juris Associates</strong></p>
                <p className="text-gray-300">Kolkata, West Bengal, India</p>
                <p className="text-gray-300">Email: <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-[#c9a870] hover:underline">{SOCIAL_LINKS.email}</a></p>
                <p className="text-gray-300">Phone: <a href="tel:9211957859" className="text-[#c9a870] hover:underline">+91 9211957859</a></p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

