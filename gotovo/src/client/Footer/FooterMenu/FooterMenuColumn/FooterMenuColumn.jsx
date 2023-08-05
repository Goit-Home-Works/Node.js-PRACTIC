import PropTypes from 'prop-types';

import CustomLink from "../../../../shared/components/Link";

import styles from "./FooterMenuColumn.module.scss";

const FooterMenuColumn = ({ title, type, list }) => {

    const menuElements = list.map(({ id, href, text, target }) => {
        return (
            <li key={id} className={styles["item"]}>
                <CustomLink href={href} target={target} className={styles["link"]}>
                    {text}
                </CustomLink>
            </li>
        )
    });

    return (
        <div className={`${styles["col"]} ${styles[type]}`}>
            <p className={styles["heading"]}>{title}</p>
            <ul>
                {menuElements}
            </ul>
        </div>
    )
}

FooterMenuColumn.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.object)
}

export default FooterMenuColumn;