const path = require('path');

const mimeTypes={
    'css':'text/css',
    'js':'text/html',
    'txt':'text/pain',
}

module.exports = (filePath) => {
    let ext = path.extname(filePath).split('.').pop().toLowerCase();
    if (!ext) {
        ext = filePath;
    }
    return mimeTypes[ext]||mimeTypes['txt'];
}