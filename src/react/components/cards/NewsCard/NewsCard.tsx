import type {NewsItem} from "../../../../types/news";
import {Link} from "react-router";
import {formatDate} from "../../../../scripts/helpers/DateFormatter.ts";
import styles from "./NewsCard.module.scss";

type NewsCardProps = {
    newsItem: NewsItem;
};

const NewsCard = ({newsItem}: NewsCardProps) => {
    return (
        <article className={styles.news_card}>
            <Link to={`/news/${newsItem.id}`}>
                <div className={styles.news_content}>
                    <img src={`/images/news/${newsItem.imageUrl}`} alt={newsItem.title}/>
                    <div className={styles.news_text_block}>
                        <h2 className={styles.news_card_title}>{newsItem.title}</h2>
                        <p>{newsItem.text}</p>
                    </div>
                    <p className={styles.news_card_date}>{formatDate(newsItem.date)}</p>
                </div>
            </Link>
        </article>
    );
}
export default NewsCard;