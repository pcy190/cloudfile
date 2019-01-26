const http = require('http');
const conf = require('./config/defalutConfig');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const promisify = require('util').promisify;
const route = require('./helper/route');
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const openUrl = require('./helper/openUrl');

class Server {
    constructor(config) {
        this.conf = Object.assign({}, conf, config);
    }
    start() {
        const server = http.createServer((req, res) => {
            const filePath = path.join(this.conf.root, req.url);
            route(req, res, filePath, this.conf);
        });

        server.listen(this.conf.port, this.conf.hostname, () => {
            const addr = `http://${this.conf.hostname}:${this.conf.port}`;
            console.log('Server started at', chalk.red(addr));
            openUrl(addr);
        });
    }
}

module.exports = Server;