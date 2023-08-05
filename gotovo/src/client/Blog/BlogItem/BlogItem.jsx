import PropTypes from 'prop-types';

import CustomLink from "../../../shared/components/Link";

import styles from "./BlogItem.module.scss";

const BlogItem = ({ className, title, date, img, link }) => {
    return (
        <CustomLink href={link} className={`${styles["item"]} ${className}`}>
            <div className={styles["photo"]}>
                <img className={styles["img"]} src={img} alt="Blog photo"/>
            </div>
            <div className={styles["info"]}>
                <p className={styles["title"]}>{title}</p>
                <p>{date}</p>
            </div>
        </CustomLink>
    )
};

BlogItem.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default BlogItem;