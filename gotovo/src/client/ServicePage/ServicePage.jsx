import PropTypes from 'prop-types';

import Container from "../../shared/components/Container";
import Button from "../../shared/components/Button";
import CustomLink from '../../shared/components/Link';

import styles from "./ServicePage.module.scss";

const ServicePage = ({ img, title, btnText, children }) => {

    return (
        <section className={styles["section"]}>
            <Container>
                <div className={styles["header"]}>
                    <Button className={styles["btn"]} href="/services" text={btnText} color="light" size="normal" />
                    <CustomLink href="/services" className={styles["mob-btn"]} />
                    <img className={styles["logo"]} src={img} alt="Service logo" />
                    <h2 className={styles["title"]}>{title}</h2>
                </div>
                {children}
            </Container>
        </section>
    )
};

ServicePage.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default ServicePage;