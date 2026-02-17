import type {NewsItem} from '../../types/news';

export const fetchNews = async (): Promise<NewsItem[]> => {
    await new Promise(res => setTimeout(res, 1000)); // имитация API

    const response = await fetch('/data/news.json');

    if (!response.ok) {
        throw new Error('Ошибка загрузки данных');
    }

    return response.json();
};

export const fetchNewsById = async (id: string | undefined): Promise<NewsItem> => {
    if (id === undefined) {
        throw new Response('Not Found', {status: 404});
    }
    const news = await fetchNews();
    const item = news.find(n => n.id === Number(id));

    if (!item) {
        throw new Response('Not Found', {status: 404});
    }

    return item;
}