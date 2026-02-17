import Header from "../../ui/Header/Header.tsx";
import {Outlet} from "react-router";
import Footer from "../../ui/Footer/Footer.tsx";
import styles from "./Layout.module.scss";

const LayoutWithFooter = () => {
    return (
        <div className={styles.layout_container}>
            <div className={styles.layout}>
                <Header />
                <main className={styles.layout__content}>
                    <Outlet/>
                </main>
            </div>
            <Footer />
        </div>
    );
}
export default LayoutWithFooter;