import PropTypes from 'prop-types';

import styles from "./Container.module.scss";

const Container = ({ className, children }) => {
    return (
        <div className={`${className} ${styles["container"]}`}>
            {children}
        </div>
    )
};

Container.defaultProps = {
    className: ''
}

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default Container;