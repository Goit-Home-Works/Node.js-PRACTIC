import PropTypes from 'prop-types';

import styles from "./ServiceArticle.module.scss";

const ServiceArticle = ({ content }) => {

    const articleElems = content.map(({ id, text = null, list = null }) => {
        if (text) {
            return <p key={id} className={styles["text"]}>{text}</p>
        } else {
            const listElems = list.map(({ id, text }) => <li key={id} className={styles["list-item"]}>{text}</li>);
            return (
                <ul key={id}>
                    {listElems}
                </ul>
            )
        }
    });

    return (
        <div className={styles["article"]}>
            {articleElems}
        </div>
    )
};

ServiceArticle.propTypes = {
    content: PropTypes.arrayOf(PropTypes.object)
}

export default ServiceArticle;