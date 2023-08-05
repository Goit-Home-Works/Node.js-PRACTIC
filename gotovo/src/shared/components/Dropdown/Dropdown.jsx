import PropTypes from 'prop-types';

import {useRef} from "react";

import styles from "./Dropdown.module.scss";

const Dropdown = ({ heading, list, openMenuIdx, toggle, index, listTitle }) => {

    const contentRef = useRef(null);

    const isActive = (index === openMenuIdx) ? styles["active"] : '';

    const listTitleElement = listTitle ? <li className={styles["list-title"]}>{listTitle}</li> : null;

    const listElements = list.map(({ id, text }) => <li className={styles["item"]} key={id}>{text}</li>);

    let elementStyle = {};

    if (contentRef.current && (index === openMenuIdx)) {
        const {style, scrollHeight} = contentRef.current;
        elementStyle.maxHeight = style.maxHeight ? null : `${scrollHeight}px`;
    }

    return (
        <div className={styles["dropdown"]} onClick={() => toggle(index)}>
            <div className={`${styles["btn"]} ${isActive}`}>{heading}</div>
            <div className={styles["content"]} ref={contentRef} style={elementStyle}>
                <ul className={styles["list"]}>
                    {listTitleElement}
                    {listElements}
                </ul>
            </div>
        </div>
    )
};

Dropdown.defaultProps = {
    listTitle: ''
}

Dropdown.propTypes = {
    heading: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.object),
    openMenuIdx: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),
    toggle: PropTypes.func,
    index: PropTypes.number,
    listTitle: PropTypes.string
}

export default Dropdown;