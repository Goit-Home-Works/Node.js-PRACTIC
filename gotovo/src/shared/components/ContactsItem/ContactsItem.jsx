import PropTypes from 'prop-types';

import styles from "./ContactsItem.module.scss";

const ContactsItem = ({ className, name, text, textClassName, href, img, children }) => {
    const textElement = href ? (
        <a href={href} className={styles["link"]}>{text}</a>
    ) : (
        (children) ? (
            <div className={`${styles["text"]} ${textClassName}`}>{children}</div>
        ) : (
            <p className={styles["text"]}>{text}</p>
        )
    );
    return (
        <div className={`${styles["item"]} ${className}`}>
            <span className={styles["icon"]}>
                <img src={img} alt="Contact icon" />
            </span>
            <p className={styles["name"]}>{name}</p>
            {textElement}
        </div>
    )
};

ContactsItem.defaultProps = {
    className: '',
    href: '',
    text: '',
    textClassName: '',
    children: null
}

ContactsItem.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    text: PropTypes.string,
    textClassName: PropTypes.string,
    href: PropTypes.string,
    img: PropTypes.string,
    children: PropTypes.node
}

export default ContactsItem;