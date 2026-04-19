const fs = require('fs');
let content = fs.readFileSync('src/pages/HomePage.jsx', 'utf8');

// Center all max-width containers that don't already have mx-auto
content = content.replace(/max-w-\[(\d+)px\](?!\s*mx-auto)/g, 'max-w-[\$1px] mx-auto');

// The header has a fixed w-[1280px] causing it to sit on the left. Change to w-full.
content = content.replace(/top-0 w-\[1280px\]/g, 'top-0 w-full items-center left-0 right-0');

// Make the logo larger in both header and footer to match expectations.
content = content.replace(/h-\[40px\] w-auto object-contain/g, 'h-[60px] w-[180px] object-contain');

fs.writeFileSync('src/pages/HomePage.jsx', content);
