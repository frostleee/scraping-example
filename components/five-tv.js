import {Browser} from "./browser";
import {News} from "./elements/news";

export class FiveTv {
    /**
     * @constructor
     */
    constructor() {
        this._newsLink = 'https://www.5-tv.ru/news/';
        this._browser = new Browser();
    }

    /**
     * @return {Promise<News[]>}
     */
    async getLastNewsList() {
        return this._browser.getContent(this._newsLink, $ => {
            return $('.scrollingVertBody > a').slice(0, 1).get().map(el =>
                (new News())
                    .setTime($(el).find('dt').text())
                    .setTitle($(el).find('dd').text().trim())
                    .setUrl($(el).attr('href'))
            );
        });
    };
}