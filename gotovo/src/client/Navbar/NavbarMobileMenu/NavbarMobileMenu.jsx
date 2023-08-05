import { useState } from "react";

import Image from "next/image";
import MobMenuList from "./MobMenuList";
import NavbarAuth from "../NavbarAuth";

import styles from "./NavbarMobileMenu.module.scss";

const NavbarMobileMenu = () => {
    const [state, setState] = useState(false);

    const toggle = () => {
        setState(prevState => !prevState);
    };

    const isActive = state ? "active" : "";

    return(
        <div className={styles["menu"]}>
            <div className={`${styles["btn"]} ${styles[isActive]}`} onClick={toggle}>
                <span className={`${styles["btn-item"]} ${styles["_1"]}`}></span>
                <span className={`${styles["btn-item"]} ${styles["_2"]}`}></span>
                <span className={`${styles["btn-item"]} ${styles["_3"]}`}></span>
            </div>
            <div className={`${styles["content"]} ${styles[isActive]}`}>
                <MobMenuList />
                <NavbarAuth type="mobile" />
                <div className={styles["ornament"]}>
                    <Image src="/img/ornament-yellow.png" alt="#" width="233" height="209" />
                </div>
            </div>
        </div>
    );
}

export default NavbarMobileMenu;