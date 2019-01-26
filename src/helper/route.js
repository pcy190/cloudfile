const path = require('path');
const fs = require('fs');
const HandleBars = require('handlebars');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

const tplPath = path.join(__dirname, '../template/dir.tpl')
const source = fs.readFileSync(tplPath);
const template = HandleBars.compile(source.toString());
const mime = require('./mime')
const compress = require('./compress');

module.exports = async function (req, res, filePath, config) {
    try {
        const stats = await stat(filePath);
        if (stats.isFile()) {
            const contentType = mime(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);
            //res.write('<body>')
            let rs = fs.createReadStream(filePath);
            if (filePath.match(config.compress)) {
                rs=compress(rs, req, res);
            }
            rs.pipe(res);

            //res.write('hello</br> HAPPY TEST</br>');
            //res.write(filePath)
            //res.end('</body>');
        } else if (stats.isDirectory()) {
            const files = await readdir(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            const dir = path.relative(config.root, filePath)
            const data = {
                title: path.basename(filePath),
                dir: dir ? `/${dir}` : '',
                files
            };
            res.end(template(data));
        }
    } catch (error) {
        console.log(error);
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`${filePath} can not find!`);
    }
};