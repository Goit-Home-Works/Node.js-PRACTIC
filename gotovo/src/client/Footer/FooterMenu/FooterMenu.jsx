import PropTypes from 'prop-types';

import FooterMenuColumn from './FooterMenuColumn';

import styles from "./FooterMenu.module.scss";

const FooterMenu = ({ menu }) => {

    const menuColumns = menu.map(({ id, ...props }) => {
        return (
            <FooterMenuColumn key={id} {...props} />
        )
    });

    return (
        <div className={styles["menu"]}>
            {menuColumns}
        </div>
    )
}

FooterMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.object)
}

export default FooterMenu;