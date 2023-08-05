import PropTypes from 'prop-types';

import {useTranslation} from "next-i18next";

import useAuth from "../../../../auth/hooks/use-auth";
import useLogout from "../../../../auth/hooks/use-logout";

import CustomLink from "../../../shared/components/Link";

import styles from "./NavbarAuth.module.scss";

const NavbarAuth = ({ type }) => {

    const isAuth = useAuth();
    const logout = useLogout();

    const { t } = useTranslation("navbar");
    const auth = t("auth", { returnObjects: true });

    return (
        <div className={`${styles["content"]} ${styles[type]}`}>
            {isAuth ? (
                <>
                    <a href="#" className={styles["link"]} onClick={logout}>{auth.logout}</a>
                    <CustomLink href="/profile" className={styles["link"]}>
                        {auth.profile}
                    </CustomLink>
                </>
            ) : (
                <>
                    <CustomLink href="/register" className={styles["link"]}>
                        {auth.register}
                    </CustomLink>
                    <CustomLink href="/login" className={styles["link"]}>
                        {auth.login}
                    </CustomLink>
                </>
            )}
        </div>
    )
};

NavbarAuth.propTypes = {
    type: PropTypes.oneOf(['mobile', 'desktop']).isRequired
}

export default NavbarAuth;