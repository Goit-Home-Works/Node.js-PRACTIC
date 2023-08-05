import PropTypes from 'prop-types';

import styles from "./Ornament.module.scss";

import {settings} from "./settings";

const Ornament = ({ className, img, side }) => {

    const fullClassName=`${className} ${styles["ornament"]} ${styles[settings.side[side]]}`;

    return (
        <img className={fullClassName} src={img} alt="Орнамент" />
    )
};

Ornament.defaultProps = {
    className: ''
}

Ornament.propTypes = {
    className: PropTypes.string,
    img: PropTypes.string.isRequired,
    side: PropTypes.oneOf(['left', 'right']).isRequired
}

export default Ornament;