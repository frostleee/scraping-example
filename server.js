import {FiveTv} from "./components/five-tv";

(async () => {
    const fiveTv = new FiveTv();
    const news = await fiveTv.getLastNewsList();

    let newList = [];

    for (const item of news) {
        const view = await item.view();
        const title = item.getTitle();
        const time = item.getTime();
        const author = view.getAuthor();

        newList.push(`Дата: ${time}, Автор: ${author}, Заголовок: ${title}`);
    }

    console.log(newList);
})();