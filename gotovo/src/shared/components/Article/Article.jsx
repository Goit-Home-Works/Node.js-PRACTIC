import PropTypes from 'prop-types';

import styles from "./Article.module.scss";

const Article = ({ className, title, article }) => {

    const articleElems = article.map(({ id, text = null, list = null }) => {
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
    })

    return (
        <div className={`${className} ${styles["article"]}`}>
            <h2 className={styles["heading"]}>{title}</h2>
            {articleElems}
        </div>
    )
};

Article.defaultProps = {
    className: ''
}

Article.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    article: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Article;