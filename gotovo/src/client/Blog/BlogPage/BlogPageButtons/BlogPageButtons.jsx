import PropTypes from 'prop-types';

import Button from "../../../../shared/components/Button";

import styles from "./BlogPageButtons.module.scss";

const BlogPageButtons = ({ pageNum, length, btnTextPrev, btnTextNext }) => {

    const prevBtn = (pageNum > 1) ? (
        <Button className={styles["btn"]} href={`/news/${pageNum - 1}`} text={btnTextPrev} />
    ) : (
        <div></div>
    );

    const nextBtn = (pageNum < length) ? (
        <Button className={styles["btn"]} href={`/news/${Number(pageNum) + 1}`} text={btnTextNext} />
    ) : (
        <div></div>
    );

    return (
        <div className={styles["buttons"]}>
            {prevBtn}
            {nextBtn}
        </div>
    )
};

BlogPageButtons.propTypes = {
    pageNum: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    length: PropTypes.number.isRequired,
    btnTextPrev: PropTypes.string.isRequired,
    btnTextNext: PropTypes.string.isRequired
}

export default BlogPageButtons;