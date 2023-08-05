import { useTranslation } from "next-i18next";

import CustomLink from "../../../shared/components/Link";

import styles from "./NavbarMenu.module.scss";

const NavbarMenu = () => {
    
    const { t } = useTranslation("navbar");
    const menuItems = t("menu", { returnObjects: true });

    const menuElements = menuItems.map(({ id, href, text, list = null }) => {
        if (list) {

            const menuElementList = list.map(({ id, href, text, target = "_self" }) => {
                return (
                    <li className={styles["dropdown-item"]} key={id}>
                        <CustomLink href={href} target={target} className={styles["dropdown-link"]}>
                            {text}
                        </CustomLink>
                    </li>
                )
            });

            return (
                <li className={styles["item"]} key={id} >
                    <CustomLink href={href} className={styles["link"]}>
                        {text}
                    </CustomLink>
                    <div className={styles["dropdown"]}>
                        <ul className={`${styles["dropdown-list"]}`}>
                            {menuElementList}
                        </ul>
                    </div>
                </li>
            );

        } else {
            return (
                <li className={styles["item"]} key={id}>
                    <CustomLink href={href} className={styles["link"]}>
                        {text}
                    </CustomLink>
                </li>
            );
        }
    });

    return(
        <ul className={styles["menu"]}>
            {menuElements}
        </ul>
    )
}

export default NavbarMenu;