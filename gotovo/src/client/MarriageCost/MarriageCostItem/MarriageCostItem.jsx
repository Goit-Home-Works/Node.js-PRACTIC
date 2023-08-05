import PropTypes from 'prop-types';

import { useState, useRef } from "react";

import styles from "./MarriageCostItem.module.scss";

const MarriageCostItem = ({ name, list, openBtnText, closeBtnText, text, price }) => {

    const [state, setState] = useState(false);
    const contentRef = useRef(null);

    const toggle = () => {
        setState(prevState => !prevState);

        const {style, scrollHeight} = contentRef.current;
        style.maxHeight = style.maxHeight ? null : `${scrollHeight}px`;
    };

    const isActive = state ? styles["active"] : '';
    const btnText = state ? closeBtnText : openBtnText;

    const listElements = list.map(({ id, text }) => {
        return <li key={id} className={styles["list-item"]}>{text}</li>
    });

    return (
        <div className={`${styles["item"]} ${isActive}`}>
            <div className={styles["heading"]}>
                <p className={styles["text"]}>{name}</p>
                {text ? <p className={styles["small-text"]}>{text}</p> : null}
                {price ? <p className={`${styles["text"]} ${styles["underline"]}`}>{price}</p> : null}
            </div>
            <div className={styles["content"]} ref={contentRef} >
                <ul>
                    {listElements}
                </ul>
            </div>
            <div className={`${styles["btn"]} ${isActive}`} onClick={() => toggle()}>{btnText}</div>
        </div>
    )
};

MarriageCostItem.defaultProps = {
    text: '',
    price: ''
}

MarriageCostItem.propTypes = {
    name: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    openBtnText: PropTypes.string.isRequired,
    closeBtnText: PropTypes.string.isRequired,
    text: PropTypes.string,
    price: PropTypes.string
}

export default MarriageCostItem;