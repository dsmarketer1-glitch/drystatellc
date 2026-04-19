import fs from 'fs';
import http from 'http';
import path from 'path';

const extractAndDownload = async () => {
    const filePath = 'C:/Users/Deepak/.gemini/antigravity/brain/9a662dd2-7f0a-4b04-8733-0eda64a3e345/.system_generated/steps/10/output.txt';
    const outDir = './public/assets';

    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const urlRegex = /"(http:\/\/localhost:3845\/assets\/[^"]+)"/g;
    
    let match;
    const urls = new Set();
    while ((match = urlRegex.exec(content)) !== null) {
        urls.add(match[1]);
    }

    console.log(`Found ${urls.size} unique asset URLs.`);

    for (const url of urls) {
        const urlObj = new URL(url);
        const fileName = path.basename(urlObj.pathname);
        const dest = path.join(outDir, fileName);
        
        await new Promise((resolve, reject) => {
            const file = fs.createWriteStream(dest);
            http.get(url, (response) => {
                if (response.statusCode === 200) {
                    response.pipe(file);
                    file.on('finish', () => {
                        file.close(resolve);
                    });
                } else {
                    file.close();
                    fs.unlink(dest, () => {}); // Delete the file async
                    console.log(`Failed to download ${url}: ${response.statusCode}`);
                    resolve(); // continue even if failed
                }
            }).on('error', (err) => {
                fs.unlink(dest, () => {});
                console.log(`Error downloading ${url}: ${err.message}`);
                resolve();
            });
        });
        console.log(`Downloaded ${fileName}`);
    }
};

extractAndDownload().catch(console.error);
