import {useEffect, useState} from 'react';
import NewsCard from '../../cards/NewsCard/NewsCard.tsx';
import type {NewsItem} from '../../../../types/news';
import { fetchNews } from '../../../../scripts/services/newsService.ts';
import styles from './NewsContainer.module.scss';

const NewsContainer = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        setNews(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    void loadNews();
  }, []);

  if (loading) {
    return <div className={styles.news_loading}><p>Загрузка новостей...</p></div>;
  }

  return (
    <div className={styles.news_container}>
      {news.map(item => (
        <NewsCard newsItem={item} key={item.id} />
      ))}
    </div>
  );
};
export default NewsContainer;