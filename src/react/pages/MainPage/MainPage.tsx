import NewsContainer from "../../components/containers/News/NewsContainer.tsx";
import styles from "./MainPage.module.scss";

const MainPage = () => {
    return (
        <section className={styles.news_section}>
            <h1 className={styles.main_page_title}>Новости</h1>
            <NewsContainer/>
        </section>
    );
}
export default MainPage;