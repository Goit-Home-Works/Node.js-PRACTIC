import Link from "next/link";
import { useRouter } from "next/router";

import { allLangs } from "./allLangs";

import styles from "./NavbarLanguage.module.scss";

const NavbarLanguage = () => {
    const router = useRouter();

    const langs = [...allLangs];

    const idx = langs.findIndex(({ locale }) => locale === router.locale);

    const [ currentLang ] = langs.splice(idx, 1);

    const otherLangs = langs.map(({ id, text, locale }) => (
        <Link href={router.route} locale={locale} key={id}>
            <li className={styles["item"]}>{text}</li>
        </Link>
    ));

    return (
        <div className={styles["content"]}>
            <div className={styles["btn"]}>{currentLang.text}</div>
            <ul className={styles["list"]}>
                {otherLangs}
            </ul>
        </div>
    )
}

export default NavbarLanguage;