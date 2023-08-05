import PropTypes from 'prop-types';

import Button from "../../Button";

import styles from "./ServicesItem.module.scss";

const ServicesItem = ({ img, href, text, target, btnText }) => {
    return (
        <div className={styles["item"]}>
            <img className={styles["img"]} src={img} alt="Services icon" />
            <p className={styles["text"]}>{text}</p>
            <Button href={href} target={target} text={btnText} color="light" size="long" />
        </div>
    )
};

ServicesItem.propTypes = {
    img: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
    btnText: PropTypes.string.isRequired
}

export default ServicesItem;