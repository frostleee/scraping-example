import {FiveTv} from "./components/five-tv";

(async () => {
    const fiveTv = new FiveTv();
    const news = await fiveTv.getLastNewsList();

    news[0].view().then(news => {
        console.log(news.getTitle());
        console.log(news.getDatetime());
        console.log(news.getAuthor());
        console.log(news.getCategory());
        console.log(news.getViewCounter());
        console.log(news.getDescription());
    });
})();