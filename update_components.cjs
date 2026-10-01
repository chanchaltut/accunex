const fs = require('fs');

function replaceFile(path, replacer) {
  if (!fs.existsSync(path)) return;
  let content = fs.readFileSync(path, 'utf8');
  content = replacer(content);
  fs.writeFileSync(path, content);
}

// 1. ServicesSection.jsx
replaceFile('src/components/ServicesSection.jsx', (c) => {
  if (!c.includes('react-icons/ri')) {
    c = c.replace("import { SERVICES, SERVICE_CATEGORIES, BRAND } from '../utils/constants';", 
                  "import { SERVICES, SERVICE_CATEGORIES, BRAND } from '../utils/constants';\nimport { RiFireLine, RiQuestionAnswerLine } from 'react-icons/ri';");
  }
  c = c.replace(/\{service.iconEmoji\}/g, '<service.icon />');
  c = c.replace(/🔥 \{service\.badge\}/g, '<RiFireLine className="inline mr-1" /> {service.badge}');
  c = c.replace(/💬 Ask Our CA Expert/g, '<RiQuestionAnswerLine className="inline mr-1" /> Ask Our CA Expert');
  return c;
});

// 2. Hero.jsx
replaceFile('src/components/Hero.jsx', (c) => {
  if (!c.includes('react-icons/ri')) {
    c = c.replace("import { FaWhatsapp", "import { RiTrophyLine, RiStarFill, RiFlashlightFill, RiGlobalLine } from 'react-icons/ri';\nimport { FaWhatsapp");
  }
  c = c.replace(/🏆 \{slide\.badge\}/g, '<RiTrophyLine className="inline mr-1" /> {slide.badge}');
  c = c.replace(/icon: '🏆'/g, 'icon: <RiTrophyLine />');
  c = c.replace(/icon: '⭐'/g, 'icon: <RiStarFill />');
  c = c.replace(/icon: '⚡'/g, 'icon: <RiFlashlightFill />');
  c = c.replace(/icon: '🌐'/g, 'icon: <RiGlobalLine />');
  return c;
});

// 3. ProcessSection.jsx
replaceFile('src/components/ProcessSection.jsx', (c) => {
  if (!c.includes('react-icons/ri')) {
    c = c.replace("import { PROCESS_STEPS }", "import { PROCESS_STEPS } from '../utils/constants';\nimport { RiFlashlightFill } from 'react-icons/ri';");
  }
  c = c.replace(/\{step\.icon\}/g, '<step.icon />');
  c = c.replace(/<span className="text-2xl">⚡<\/span>/g, '<RiFlashlightFill className="text-2xl text-[#f4b942]" />');
  return c;
});

// 4. ExpertCA.jsx
replaceFile('src/components/ExpertCA.jsx', (c) => {
  if (!c.includes('react-icons/ri')) {
    c = c.replace("import { FaArrowRight", "import { RiTrophyLine } from 'react-icons/ri';\nimport { FaArrowRight");
  }
  c = c.replace(/\{feature\.icon\}/g, '<feature.icon />');
  c = c.replace(/<span className="text-2xl">🏆<\/span>/g, '<RiTrophyLine className="text-2xl" />');
  return c;
});

// 5. FAQSection.jsx
replaceFile('src/components/FAQSection.jsx', (c) => {
  if (!c.includes('react-icons/ri')) {
    c = c.replace("import { FaChevronDown", "import { RiWhatsappLine } from 'react-icons/ri';\nimport { FaChevronDown");
  }
  c = c.replace(/💬 Ask on WhatsApp/g, '<RiWhatsappLine className="inline mr-1" /> Ask on WhatsApp');
  return c;
});

// 6. CTABanner.jsx
replaceFile('src/components/CTABanner.jsx', (c) => {
  if (!c.includes('react-icons/ri')) {
    c = c.replace("import { FaPhone", "import { RiAwardLine } from 'react-icons/ri';\nimport { FaPhone");
  }
  c = c.replace(/🎉 FREE CONSULTATION/g, '<RiAwardLine className="inline mr-1 text-base" /> FREE CONSULTATION');
  return c;
});

// 7. ServicePage.jsx
replaceFile('src/pages/services/ServicePage.jsx', (c) => {
  if (!c.includes('react-icons/ri')) {
    c = c.replace("import { BRAND }", "import { BRAND } from '../../utils/constants';\nimport { RiMessage3Line } from 'react-icons/ri';");
  }
  c = c.replace(/\{service\.iconEmoji\}/g, '<service.icon className="mx-auto" />');
  c = c.replace(/💬 Get \{service\.shortTitle\}/g, '<RiMessage3Line className="inline mr-1" /> Get {service.shortTitle}');
  c = c.replace(/💬 Get Free Quote/g, '<RiMessage3Line className="inline mr-1" /> Get Free Quote');
  return c;
});

// 8. GSTServices.jsx
replaceFile('src/pages/services/GSTServices.jsx', (c) => {
  if (!c.includes('react-icons/ri')) {
    c = c.replace("import { SERVICES", "import { RiMessage3Line } from 'react-icons/ri';\nimport { SERVICES");
  }
  c = c.replace(/\{service\.iconEmoji\}/g, '<service.icon />');
  c = c.replace(/💬 Get \{service\.shortTitle\}/g, '<RiMessage3Line className="inline mr-1" /> Get {service.shortTitle}');
  c = c.replace(/💬 Get Free Quote/g, '<RiMessage3Line className="inline mr-1" /> Get Free Quote');
  return c;
});

// 9. TeamSection.jsx
replaceFile('src/components/TeamSection.jsx', (c) => {
  if (!c.includes('react-icons/ri')) {
    c = c.replace("import { FaPhone", "import { RiUser3Line } from 'react-icons/ri';\nimport { FaPhone");
  }
  c = c.replace(/<span className="text-4xl">👤<\/span>/g, '<RiUser3Line className="text-4xl" />');
  return c;
});

// 10. DisclaimerModal.jsx
replaceFile('src/components/DisclaimerModal.jsx', (c) => {
  if (!c.includes('react-icons/ri')) {
    c = c.replace("import React", "import React, { useState, useEffect } from 'react';\nimport { RiErrorWarningLine } from 'react-icons/ri';");
  }
  c = c.replace(/<span className="text-xl">⚠️<\/span>/g, '<RiErrorWarningLine className="text-xl" />');
  return c;
});

// 11. Footer.jsx
replaceFile('src/components/Footer.jsx', (c) => {
  if (!c.includes('react-icons/ri')) {
    c = c.replace("import { FaFacebookF", "import { RiMailSendLine } from 'react-icons/ri';\nimport { FaFacebookF");
  }
  c = c.replace(/📩 Tax Updates Newsletter/g, '<RiMailSendLine className="inline mr-2" /> Tax Updates Newsletter');
  return c;
});

