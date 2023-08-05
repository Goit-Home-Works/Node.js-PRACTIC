import { useTranslation } from "next-i18next";
import { useState, useRef } from "react";

import CustomLink from "../../../../shared/components/Link";

import styles from "./MobMenuList.module.scss";

const MobMenuList = () => {
    const { t } = useTranslation("navbar");
    const menuItems = t("menu", { returnObjects: true });

    const [openMenuIdx, setOpenMenuIdx] = useState(false);

    const toggle = (idx) => {
        setOpenMenuIdx(prevState => {
            return (prevState === idx) ? false : idx;
        });
    };

    const menuElements = menuItems.map(({ id, href, text, list = null }, index) => {
        if (list) {
            const elRef = useRef(null);

            const isActive = (index === openMenuIdx) ? "active" : "";

            let elementStyle = {};
            if (elRef.current && (index === openMenuIdx)) {
                const { style, scrollHeight } = elRef.current;
                elementStyle.maxHeight = style.maxHeight ? null : `${scrollHeight}px`;
            }

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
                    <span className={`${styles["link"]} ${styles[isActive]}`} onClick={() => toggle(index)} >
                        {text}
                    </span>
                    <div className={`${styles["dropdown"]} ${styles[isActive]}`} ref={elRef} style={elementStyle}>
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

export default MobMenuList;