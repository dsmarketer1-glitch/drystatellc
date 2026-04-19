const fs = require('fs');
let content = fs.readFileSync('src/pages/HomePage.jsx', 'utf8');

content = content.replace(/w-auto max-w-\[200px\] h-\[72px\] object-contain object-left/g, 'w-auto max-w-[400px] h-[90px] object-contain object-left transform scale-[2] translate-x-4 origin-left');

fs.writeFileSync('src/pages/HomePage.jsx', content);
