import PropTypes from 'prop-types';

import Container from "../Container";
import Image from 'next/image';

import styles from "./Header.module.scss";

const Header = ({ title, text, children, img, mobImg }) => {
    return (
        <header className={styles["header"]}>
            <Container className={styles["container"]}>
                <h2 className={styles["text-big"]}>{title}</h2>
                <p className={styles["text-small"]}>{text}</p>
                {children}
            </Container>
            <div className={styles["img-mob"]}>
                <Image src={mobImg} width={363} height={460} priority alt="Header image" />
            </div>
            <div className={styles["img"]}>
                <Image src={img} width={571} height={468} priority alt="Header image" />
            </div>
        </header>
    )
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    children: PropTypes.node,
    img: PropTypes.string,
    mobImg: PropTypes.string
}

export default Header;