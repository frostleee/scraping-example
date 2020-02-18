export class NewsView {
    /**
     * @constructor
     */
    constructor() {
        this._title = null;
        this._datetime = null;
        this._author = null;
        this._category = null;
        this._viewCounter = null;
        this._description = null;
        this._body = null;
    }

    /**
     * @return {String}
     */
    getBody() {
        return this._body;
    }

    /**
     * @public
     * @function
     * @param {String} value
     * @return {NewsView}
     */
    setBody(value) {
        this._body = value;
        return this;
    }

    /**
     * @return {String}
     */
    getDescription() {
        return this._description;
    }

    /**
     * @public
     * @function
     * @param {String} value
     * @return {NewsView}
     */
    setDescription(value) {
        this._description = value;
        return this;
    }

    /**
     * @return {String}
     */
    getViewCounter() {
        return this._viewCounter;
    }

    /**
     * @public
     * @function
     * @param {String} value
     * @return {NewsView}
     */
    setViewCounter(value) {
        this._viewCounter = value;
        return this;
    }

    /**
     * @return {String}
     */
    getCategory() {
        return this._category;
    }

    /**
     * @public
     * @function
     * @param {String} value
     * @return {NewsView}
     */
    setCategory(value) {
        this._category = value;
        return this;
    }

    /**
     * @return {String}
     */
    getAuthor() {
        return this._author;
    }

    /**
     * @public
     * @function
     * @param {String} value
     * @return {NewsView}
     */
    setAuthor(value) {
        this._author = value;
        return this;
    }

    /**
     * @return {String}
     */
    getDatetime() {
        return this._datetime;
    }

    /**
     * @public
     * @function
     * @param {String} value
     * @return {NewsView}
     */
    setDatetime(value) {
        this._datetime = value;
        return this;
    }

    /**
     * @return {String}
     */
    getTitle() {
        return this._title;
    }

    /**
     * @public
     * @function
     * @param {String} value
     * @return {NewsView}
     */
    setTitle(value) {
        this._title = value;
        return this;
    }
}