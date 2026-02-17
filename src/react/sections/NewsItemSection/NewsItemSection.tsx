import {useParams} from 'react-router';
import {useEffect, useState} from 'react';
import type {NewsItem} from '../../../types/news';
import {fetchNewsById} from '../../../scripts/services/newsService.ts';
import {formatDate} from '../../../scripts/helpers/DateFormatter.ts';
import styles from './NewsItemSection.module.scss';

const NewsItemSection = () => {
  const {id} = useParams();
  const [newsItem, setNewsItem] = useState<NewsItem>();

  useEffect(() => {
    const loadNewsItem = async () => {
      try {
        const item = await fetchNewsById(id);
        setNewsItem(item);
      } catch (error) {
        console.error('Ошибка загрузки новости', error);
      }
    };
    void loadNewsItem();
  }, [id]);

  if (!newsItem) {
    return <p>Поиск новости...</p>;
  }

  return (
    <section className={styles.news_item_section}>
      <img src={`/images/news/${newsItem.imageUrl}`} alt={newsItem.title}/>
      <div className={styles.news_text_block}>
        <div className={styles.news_title_block}>
          <h1 className={styles.news_title}>{newsItem.title}</h1>
          <p className={styles.news_date}>{formatDate(newsItem.date)}</p>
        </div>
        <div className={styles.news_description_block}>
          <h3>{newsItem.subtitle}</h3>
          <p>{newsItem.text}</p>
        </div>
      </div>
    </section>
  );
};

export default NewsItemSection;