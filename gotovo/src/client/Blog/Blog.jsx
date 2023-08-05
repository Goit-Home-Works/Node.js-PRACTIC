import {useTranslation} from "next-i18next";

import Container from "../../shared/components/Container";
import Title from "../../shared/components/Title";
import BlogItem from "./BlogItem";

import styles from "./Blog.module.scss";

const Blog = () => {

    const { t } = useTranslation("blog");
    const blogItems = t("list", {returnObjects: true});

    const blogElements = blogItems.map(({ id, text, ...props }) => {
        return <BlogItem className={styles["item"]} key={id} {...props} />
    });

    return (
        <section className={styles["blog"]}>
            <Container>
                <Title text={t("title")} />
                <div className={styles["list"]}>
                    {blogElements}
                </div>
            </Container>
        </section>
    )
};

export default Blog;