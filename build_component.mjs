import fs from 'fs';
import path from 'path';

const transformComponent = () => {
    const inputPath = 'C:/Users/Deepak/.gemini/antigravity/brain/9a662dd2-7f0a-4b04-8733-0eda64a3e345/.system_generated/steps/10/output.txt';
    const outDir = './src/pages';
    const outPath = path.join(outDir, 'HomePage.jsx');

    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    let content = fs.readFileSync(inputPath, 'utf-8');
    
    // Replace figma local image urls
    content = content.replace(/http:\/\/localhost:3845\/assets\//g, '/assets/');
    
    fs.writeFileSync(outPath, content);
    console.log('HomePage component generated.');
};

transformComponent();
