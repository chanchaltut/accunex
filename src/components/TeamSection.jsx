import React from 'react';
import { FaArrowRight, FaPhone, FaEnvelope } from 'react-icons/fa';
import { RiUser3Line } from 'react-icons/ri';
import { TEAM, BRAND } from '../utils/constants';

const TeamSection = () => {
  return (
    <section
      className="bg-[#162032] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8"
      aria-label="Our CA Team"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="section-tag">Our Team</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Meet Our <span className="text-[#f4b942]">CA Experts</span>
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            ICAI-registered Chartered Accountants with deep expertise across all areas of taxation, compliance, and corporate law.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TEAM.map((member, i) => (
            <article
              key={member.id}
              className="bg-[#0d1b2a] border border-[#1e3a54] rounded-2xl overflow-hidden hover:border-[#f4b942]/40 transition-all duration-300 card-hover group"
            >
              {/* Photo placeholder / actual image */}
              <div className="relative h-52 sm:h-60 bg-gradient-to-br from-[#1a3a5c] to-[#0d1b2a] overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-[#f4b942]/20 rounded-full flex items-center justify-center">
                      <RiUser3Line className="text-4xl" />
                    </div>
                  </div>
                )}
                {/* ICAI badge */}
                {member.icai && (
                  <div className="absolute top-3 right-3 bg-[#f4b942] text-[#0d1b2a] text-[9px] font-bold px-2 py-1 rounded-full">
                    ICAI Reg.
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5 sm:p-6 border-t-2 border-[#f4b942]">
                <h3 className="text-white font-bold text-lg sm:text-xl mb-1">{member.name}</h3>
                <p className="text-[#f4b942] text-xs sm:text-sm font-semibold tracking-wide mb-2">{member.role}</p>
                <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed mb-4">{member.expertise}</p>

                {/* Qualifications */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {member.qualification && (
                    <span className="bg-[#162032] border border-[#1e3a54] text-[#94a3b8] text-[10px] px-2.5 py-1 rounded-full">
                      {member.qualification}
                    </span>
                  )}
                  {member.experience && (
                    <span className="bg-[#162032] border border-[#1e3a54] text-[#f4b942] text-[10px] px-2.5 py-1 rounded-full">
                      {member.experience}
                    </span>
                  )}
                </div>

                {/* Contact */}
                <div className="space-y-2 mb-5">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 text-[#94a3b8] hover:text-[#f4b942] text-xs sm:text-sm transition-colors smooth-hover-fast min-h-[36px]"
                  >
                    <FaPhone className="text-[#f4b942] text-xs flex-shrink-0" />
                    <span>{member.phone}</span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-[#94a3b8] hover:text-[#f4b942] text-xs sm:text-sm transition-colors smooth-hover-fast min-h-[36px] break-all"
                  >
                    <FaEnvelope className="text-[#f4b942] text-xs flex-shrink-0" />
                    <span>{member.email}</span>
                  </a>
                </div>

                <a
                  href={`tel:${member.phone}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#f4b942] hover:bg-[#d9a230] text-[#0d1b2a] py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 group min-h-[44px]"
                >
                  Call Now
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
