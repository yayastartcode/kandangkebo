const fs = require('fs');
const content = fs.readFileSync('datasitus.txt', 'utf8');

const kegiatanMatch = content.match(/KEGIATAN KOMUNITAS KANDANG KEBO\s+A\..*?lain:\n([\s\S]*?)B\.\s/);
if (kegiatanMatch) {
    const listText = kegiatanMatch[1];
    const listItems = [];
    const lines = listText.split('\n');
    let currentItem = '';
    for (const line of lines) {
        if (/^\d+\./.test(line)) {
            if (currentItem) listItems.push(currentItem.trim());
            currentItem = line.replace(/^\d+\.\s*/, '');
        } else if (/^[a-z]\.\s/.test(line)) {
            currentItem += '\n  ' + line;
        } else if (line.trim() !== '') {
            currentItem += ' ' + line.trim();
        }
    }
    if (currentItem) listItems.push(currentItem.trim());

    let output = 'export const kegiatanAkbar = [\n';
    listItems.forEach(item => {
        output += `  ${JSON.stringify(item)},\n`;
    });
    output += '];\n\n';

    const otherKegiatanMatch = content.match(/B\.\sKomunitas Kandang Kebo dilakukan[\s\S]*?N\.\sKomunitas Kandang Kebo mengedepankan[\s\S]*?Saklawase\./);
    if (otherKegiatanMatch) {
        const lines = otherKegiatanMatch[0].split('\n');
        let outputOther = 'export const kegiatanLainnya = [\n';
        let currentOther = '';
        for (const line of lines) {
            if (/^[B-N]\.\s/.test(line)) {
                if (currentOther) outputOther += `  ${JSON.stringify(currentOther.trim())},\n`;
                currentOther = line.replace(/^[B-N]\.\s*/, '');
            } else if (line.trim() !== '' && !/^\d+\./.test(line)) {
                currentOther += ' ' + line.trim();
            } else if (/^\d+\./.test(line)) {
                currentOther += '\n  ' + line;
            }
        }
        if (currentOther) outputOther += `  ${JSON.stringify(currentOther.trim())},\n`;
        outputOther += '];\n';
        output += outputOther;
    }

    fs.writeFileSync('src/data/kegiatan.ts', output);
    console.log('Saved to src/data/kegiatan.ts');
}
