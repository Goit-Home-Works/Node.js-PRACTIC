import PropTypes from 'prop-types';

import CustomLink from "../Link";

import styles from "./Button.module.scss";

import {settings} from "./settings";

const Button = ({ className, href, text, target, size, color, shadow }) => {

    const fullClassName=`${className} ${styles.btn} ${size ? styles[settings.size[size]] : ""} ${styles[settings.color[color]]} ${shadow ? styles[settings.shadow] : ""}`;

    return (
        <CustomLink href={href} className={fullClassName} target={target}>
            {text}
        </CustomLink>
    )
};

Button.defaultProps = {
    className: '',
    target: '_self',
    color: 'dark'
}

Button.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
    size: PropTypes.oneOf(['normal', 'long']),
    color: PropTypes.oneOf(['dark', 'light']),
    shadow: PropTypes.bool
}

export default Button;