import PropTypes from 'prop-types';

import CustomLink from "../../../shared/components/Link";
import Image from "../../../shared/components/Image";

import styles from "./ProductItem.module.scss";

const ProductItem = ({ img, name, price, link }) => {
    return (
        <CustomLink href={link} className={styles["item"]}>
            <div className={styles["photo"]}>
                <div className={styles["img"]}>
                    <Image link={img} imgWidth="275" />
                </div>
            </div>
            <div className={styles["info"]}>
                <p className={styles["name"]}>{name}</p>
                <p className={styles["price"]}>{price}</p>
            </div>
        </CustomLink>
    )
};

ProductItem.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default ProductItem;