import PropTypes from 'prop-types';

import styles from "./MarriageInfoItem.module.scss";

const MarriageInfoItem = ({ title, list }) => {

    const textElems = list.map(({ id, text }) => {
        return <p key={id} className={styles["text"]}>{text}</p>
    })

    return (
        <div className={styles["item"]}>
            <h3 className={styles["title"]}>{title}</h3>
            {textElems}
        </div>
    )
};

MarriageInfoItem.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MarriageInfoItem;