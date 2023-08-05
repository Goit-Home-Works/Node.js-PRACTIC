import {useTranslation} from "next-i18next";

import Container from "../../../shared/components/Container";
import Title from "../../../shared/components/Title";
import BlogPageItem from "./BlogPageItem";
import BlogPageButtons from "./BlogPageButtons";
import BlogItem from "../BlogItem";

import styles from "./BlogPage.module.scss";

const BlogPage = ({ pageNumber }) => {

    const { t } = useTranslation("blog");
    const blogItems = t("list", {returnObjects: true});

    const { title, date, img, text } = blogItems[pageNumber - 1];

    const newsElements = blogItems.map(({ id, ...props }) => {
        return <BlogItem className={styles["item"]} key={id} {...props} />
    });

    return (
        <div className={styles["page"]}>
            <Container>
                <Title text={t("title")} />

                <div className={styles["content"]}>
                    <div>
                        <BlogPageItem img={img} title={title} text={text} date={date} />

                        <BlogPageButtons
                            pageNum={pageNumber}
                            length={blogItems.length}
                            btnTextPrev={t("prevBtn")}
                            btnTextNext={t("nextBtn")}
                        />
                    </div>

                    <div className={styles["news"]}>
                        {newsElements[0]}
                        {newsElements[1]}
                        {newsElements[2]}
                    </div>
                </div>

            </Container>
        </div>
    )
};

export default BlogPage;