import PropTypes from 'prop-types';

import Container from "../../shared/components/Container";
import Article from "../../shared/components/Article";

import styles from "./About.module.scss";

const About = ({ title, article, img }) => {

    return (
        <section className={styles["section"]}>

            <Container>
                <Article title={title} article={article} />
                <img className={styles["picture"]} src={img} alt="About us picture" />
            </Container>

            <img className={`${styles["img"]} ${styles["_1"]}`} src="/img/dots.png" alt="dots" />
            <img className={`${styles["img"]} ${styles["_2"]}`} src="/img/dots.png" alt="dots" />

        </section>
    )
};

About.propTypes = {
    title: PropTypes.string.isRequired,
    article: PropTypes.arrayOf(PropTypes.object).isRequired,
    img: PropTypes.string.isRequired
}

export default About;