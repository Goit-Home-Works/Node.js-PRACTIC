import {useTranslation} from "next-i18next";

import { useState } from "react";

import Container from "../../shared/components/Container";
import Image from "../../shared/components/Image";
import Button from "../../shared/components/Button";

import styles from "./Product.module.scss";

const Product = ({ page }) => {

    const { t } = useTranslation("product-list");
    const productItems = t('product-items', {returnObjects: true});

    const [count, setCount] = useState(1);

    const {img, name, description, price} = productItems[page];

    const featuresElements = productItems[page].features.map(({ id, text }) => {
        return (
            <p key={id} className={styles["features-item"]}>{text}</p>
        )
    });

    const minus = (n) => {
        return (n > 1) ? n - 1 : 1;
    }

    return (
        <div className={styles["section"]}>
            <Container>
                <div className={styles["product"]}>

                    <div className={styles["img"]}>
                        <Image link={img} imgWidth="560" />
                    </div>

                    <div className={styles["info"]}>
                        <h2 className={styles["name"]}>{name}</h2>
                        <p className={styles["description"]}>{description}</p>
                        <div className={styles["features"]}>
                            {featuresElements}
                        </div>
                        
                        <div className={styles["items"]}>
                            <p className={styles["price"]}>{price}</p>
                            <div className={styles["counter"]}>
                                <span className={styles["counter-btn"]} onClick={() => setCount((num) => minus(num))}></span>
                                <span className={styles["counter-value"]}>{count}</span>
                                <span className={`${styles["counter-btn"]} ${styles["_plus"]}`} onClick={() => setCount((num) => num + 1)}></span>
                            </div>
                        </div>

                        <div className={styles["buy"]}>
                            <input placeholder={t('input')} type="text" className={styles["input"]} />
                            <Button className={styles["btn"]} href="#" text={t('btn')} shadow />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
};

export default Product;