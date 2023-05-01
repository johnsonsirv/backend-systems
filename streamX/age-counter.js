const https = require('http')
const fs = require('fs');
const crypto = require('crypto')


https.get('http://localhost:8080/age-counting', (res) => {
    let data = '';

    res.on('data', (chunk) => {
       data += chunk;
    });

    res.on('end', () => {
        const items = data.match(/key=[^,]+, age=32/g)
        const keys = items.map(item => item.match(/key=([^,]+)/)[1]); 
        const output = keys.join('\n') + '\n';
        
        console.log(data, items, keys, output);

        const fileName = 'output.txt'
        fs.writeFile(fileName, output, (err) => {
            if (err) throw err;

            const hash = crypto.createHash('sha1');
            hash.setEncoding('hex');

            const stream = fs.createReadStream(fileName);
            stream.on('error', (err) => {
                console.error('Error reading file', err);
            });

            stream.on('end', () => {
                hash.end();
                const sha1sum = hash.read();
                console.log(sha1sum);
            });

            stream.pipe(hash);
        });
    });
}).on('error', (err) => {
    console.log(err);
});