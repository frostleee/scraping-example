import {Browser} from "../browser";
import {NewsView} from "./news-view";

export class News {
    /**
     * @constructor
     */
    constructor() {
        this._time = null;
        this._title = null;
        this._url = null;

        this._browser = new Browser();
    }

    /**
     * @function
     * @public
     * @return {!String}
     */
    getTime() {
        return this._time;
    }

    /**
     * @function
     * @public
     * @param {String} value
     * @return {News}
     */
    setTime(value) {
        this._time = value;
        return this;
    }

    /**
     * @function
     * @public
     * @return {!String}
     */
    getTitle() {
        return this._title;
    }

    /**
     * @function
     * @public
     * @param {String} value
     * @return {News}
     */
    setTitle(value) {
        this._title = value;
        return this;
    }

    /**
     * @function
     * @public
     * @return {!String}
     */
    getUrl() {
        return this._url;
    }

    /**
     * @function
     * @public
     * @param {String} value
     * @return {News}
     */
    setUrl(value) {
        this._url = value;
        return this;
    }

    /**
     * @function
     * @public
     * @return {Promise<NewsView>}
     */
    view() {
        return this._browser.getContent(this.getUrl(), $ =>
            (new NewsView())
                .setTitle($('h1.fsHeader1Alt').text())
                .setDatetime($('article > header > .fsSmall > time').attr('datetime'))
                .setAuthor($('article > header > .fsSmall > address > a').text())
                .setCategory($('article > header > .fsSmall > a.marginLeftHalfBase').text())
                .setViewCounter($('article > header > .fsSmall > span.views-counter').text().trim())
                .setDescription($('article > p.fsHeaderAlt').text())
                .setBody($('article > div.marginRightCol.fsBig').html())
        );
    }
}