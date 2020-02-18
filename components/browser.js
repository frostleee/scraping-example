const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

export class Browser {
    /**
     * @constructor
     */
    constructor() {
        this._ports = [
            9050, 9052, 9053,
            9054, 9055, 9056,
            9057, 9058, 9059,
        ];
        this._browser = null;
    }

    /**
     * @function
     * @public
     * @return {Promise<Browser>}
     */
    async open() {
        const port = this._port();
        this._browser = await puppeteer.launch({
            args: [`--proxy-server=socks5://127.0.0.1:${port}`]
        });

        console.info('> Browser opening');
        console.info(`> Used ${port} port`);
        console.info(`> PID ${this._browser.process().pid}`);

        return this;
    }

    /**
     * @function
     * @public
     */
    close() {
        this._browser.close();
        console.info('> Browser closed');
    }

    /**
     * @function
     * @public
     * @param {String} url
     * @param {Function} func
     * @return {Promise}
     */
    async getContent(url, func) {
        return new Promise(resolve => {
            this.open().then(browser => {
                this._loadCheerio(url).then($ => {
                    resolve(func($));
                    browser.close();
                });
            });
        });
    }

    /**
     * @function
     * @private
     * @param {String} url
     * @return {Promise}
     */
    async _loadCheerio(url) {
        const page = await this._browser.newPage();
        await page.goto(url);
        return cheerio.load(await page.content());
    }

    /**
     * @function
     * @public
     * @return {Promise<String>}
     */
    async getCurrentIp() {
        return this.getContent('https://api.ipify.org', ($, browser) => {
            return $('pre').text();
        });
    }

    /**
     * @return {number}
     */
    _port() {
        return this._ports[Math.floor(Math.random() * this._ports.length)];
    }
}