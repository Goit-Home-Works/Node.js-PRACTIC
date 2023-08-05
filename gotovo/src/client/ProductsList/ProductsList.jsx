import {useTranslation} from "next-i18next";

import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title"
import ProductItem from "./ProductItem";

import styles from "./ProductsList.module.scss";

const ProductsList = () => {

    const { t } = useTranslation("branded-product");
    const productsItems = t("products", {returnObjects: true});

    const productsElements = productsItems.map(({ id, ...props }) => {
        return <ProductItem key={id} {...props} />
    });

    return (
        <section className={styles["products"]}>
            <Container>
                <Title text={t("title")} />
                <div className={styles["list"]}>
                    {productsElements}
                </div>
            </Container>
        </section>
    )
};

export default ProductsList;