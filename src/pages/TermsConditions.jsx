import React from 'react';
import { SOCIAL_LINKS } from '../utils/constants';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 leading-tight">
              Terms & <span className="text-[#c9a870]">Conditions</span>
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
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                By accessing and using the Juris Associates website, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                2. Legal Disclaimer
              </h2>
              <div className="space-y-4 text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                <p>
                  <strong className="text-white">2.1 No Legal Advice:</strong> The information provided on this website is for general informational purposes only and does not constitute legal advice. You should not act or refrain from acting based on any information contained on this website without seeking appropriate legal counsel.
                </p>
                <p>
                  <strong className="text-white">2.2 No Attorney-Client Relationship:</strong> Use of this website or communication with Juris Associates through this website does not create an attorney-client relationship. An attorney-client relationship is formed only after a formal engagement agreement is executed.
                </p>
                <p>
                  <strong className="text-white">2.3 Bar Council Compliance:</strong> As per the rules of the Bar Council of India, lawyers and law firms are not permitted to solicit work or advertise. By using this website, you acknowledge that you are seeking information of your own accord and there has been no solicitation, invitation, or inducement of any sort by Juris Associates.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                3. Use of Website
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed mb-4">
                You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website. You agree not to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 text-[15px] sm:text-[16px]">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Transmit any malicious code, viruses, or harmful data</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Use automated systems to access the website without permission</li>
                <li>Reproduce, duplicate, or copy any content without authorization</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                4. Intellectual Property
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of Juris Associates or its content suppliers and is protected by Indian and international copyright laws. You may not use, reproduce, or distribute any content from this website without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                5. Legal Services
              </h2>
              <div className="space-y-4 text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                <p>
                  <strong className="text-white">5.1 Engagement:</strong> Legal services are provided only after a formal engagement agreement is executed between you and Juris Associates. The terms of engagement, including fees and scope of work, will be detailed in the engagement agreement.
                </p>
                <p>
                  <strong className="text-white">5.2 Confidentiality:</strong> We maintain strict confidentiality regarding all client information and matters, in accordance with professional ethics and applicable laws.
                </p>
                <p>
                  <strong className="text-white">5.3 Fees:</strong> Legal fees and charges will be communicated to you before engagement and are subject to the terms agreed upon in the engagement agreement.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                To the maximum extent permitted by law, Juris Associates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of this website or our services.
              </p>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                7. Indemnification
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                You agree to indemnify and hold harmless Juris Associates, its partners, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or related to your use of the website or violation of these Terms and Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                8. Third-Party Links
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                Our website may contain links to third-party websites. We do not endorse or assume responsibility for the content, privacy policies, or practices of any third-party websites. Your use of third-party websites is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                9. Modifications to Terms
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this website. Your continued use of the website after changes are posted constitutes your acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                10. Governing Law and Jurisdiction
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal, India.
              </p>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                11. Severability
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
                If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-white text-2xl font-bold mb-4 text-[#c9a870]">
                12. Contact Information
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
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

export default TermsConditions;

