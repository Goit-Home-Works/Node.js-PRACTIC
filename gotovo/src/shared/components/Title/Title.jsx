import PropTypes from 'prop-types';

import styles from "./Title.module.scss";

const Title = ({ className, text }) => {
    return (
        <h2 className={`${className} ${styles["title"]}`}>{text}</h2>
    )
};

Title.defaultProps = {
    className: ''
}

Title.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default Title;