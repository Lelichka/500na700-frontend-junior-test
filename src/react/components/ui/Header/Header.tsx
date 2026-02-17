import Button from "../../inputs/Button/Button.tsx";
import logo from "../../../../assets/logo.svg"
import {useState} from "react";
import ContactUsModal from "../../../popups/ContactUs/ContactUsModal.tsx";
import styles from "./Header.module.scss";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <header>
            <div className={styles.header__container}>
                <img src={logo} className={styles.logo} alt={"logo"} />
                <Button onClick={() => setIsModalOpen(true)}>Связаться с нами</Button>
            </div>
            {isModalOpen && <ContactUsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />}
        </header>
    );
}
export default Header;