const fs = require('fs');

let content = fs.readFileSync('src/utils/constants.js', 'utf8');

// Add imports at the top
const imports = `import {
  RiBarChartBoxLine, RiMoneyDollarCircleLine, RiBuilding2Line, RiFactoryLine,
  RiPercentLine, RiBookMarkLine, RiClipboardLine, RiRocketLine, RiScales3Line,
  RiEarthLine, RiLockPasswordLine, RiTrademarkLine, RiRestaurantLine, RiLineChartLine,
  RiTrophyLine, RiGlobalLine, RiWallet3Line, RiFlashlightFill, RiShieldCheckLine, RiCustomerService2Line,
  RiPhoneLine, RiFileTextLine, RiCheckDoubleLine
} from 'react-icons/ri';\n\n`;

content = imports + content;

// Replace SERVICES iconEmojis
content = content.replace(/iconEmoji: '📊'/g, 'icon: RiBarChartBoxLine');
content = content.replace(/iconEmoji: '💰'/g, 'icon: RiMoneyDollarCircleLine');
content = content.replace(/iconEmoji: '🏢'/g, 'icon: RiBuilding2Line');
content = content.replace(/iconEmoji: '🏭'/g, 'icon: RiFactoryLine');
content = content.replace(/iconEmoji: '✂️'/g, 'icon: RiPercentLine');
content = content.replace(/iconEmoji: '📚'/g, 'icon: RiBookMarkLine');
content = content.replace(/iconEmoji: '📋'/g, 'icon: RiClipboardLine');
content = content.replace(/iconEmoji: '🚀'/g, 'icon: RiRocketLine');
content = content.replace(/iconEmoji: '⚖️'/g, 'icon: RiScales3Line');
content = content.replace(/iconEmoji: '🌍'/g, 'icon: RiEarthLine');
content = content.replace(/iconEmoji: '🔐'/g, 'icon: RiLockPasswordLine');
content = content.replace(/iconEmoji: '™️'/g, 'icon: RiTrademarkLine');
content = content.replace(/iconEmoji: '🍽️'/g, 'icon: RiRestaurantLine');
content = content.replace(/iconEmoji: '📈'/g, 'icon: RiLineChartLine');

// Replace WHY_CHOOSE_US icons
content = content.replace(/icon: '🏆'/g, 'icon: RiTrophyLine');
content = content.replace(/icon: '🌐'/g, 'icon: RiGlobalLine');
content = content.replace(/icon: '💰'/g, 'icon: RiWallet3Line');
content = content.replace(/icon: '⚡'/g, 'icon: RiFlashlightFill');
content = content.replace(/icon: '🔒'/g, 'icon: RiShieldCheckLine');
content = content.replace(/icon: '📞'/g, 'icon: RiCustomerService2Line');

// Replace PROCESS_STEPS icons
content = content.replace(/icon: '📞'/g, 'icon: RiPhoneLine');
content = content.replace(/icon: '📄'/g, 'icon: RiFileTextLine');
// ⚡ is already replaced above if we did global, but wait it's string '⚡'
content = content.replace(/icon: '⚡'/g, 'icon: RiFlashlightFill');
content = content.replace(/icon: '✅'/g, 'icon: RiCheckDoubleLine');

// Replace HERO_SLIDES badges (remove emojis)
content = content.replace(/badge: '🏆 /g, "badge: '");
content = content.replace(/badge: 'GST • ITR • Company Registration'/g, "badge: 'GST • ITR • Company Registration'");

fs.writeFileSync('src/utils/constants.js', content);
