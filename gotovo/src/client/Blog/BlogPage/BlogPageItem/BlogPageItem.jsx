import PropTypes from 'prop-types';

import styles from "./BlogPageItem.module.scss";

const BlogPageItem = ({ title, date, img, text }) => {

    const listElements = text.map(({id, text}) => {
        return <p key={id} className={styles["text"]}>{text}</p>
    });

    return (
        <div className={styles["item"]}>
            <img className={styles["img"]} src={img} alt="photo" />
            <div className={styles["info"]}>
                <h2 className={styles["title"]}>{title}</h2>
                {listElements}
                <p className={styles["date"]}>{date}</p>
            </div>
        </div>
    )
};

BlogPageItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    text: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default BlogPageItem;