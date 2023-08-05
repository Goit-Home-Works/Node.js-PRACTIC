import PropTypes from 'prop-types';

import CustomLink from "../../../shared/components/Link";

import styles from "./ScheduleItem.module.scss";

const ScheduleItem = ({ name, img, href, target, scheduleList }) => {

    const scheduleListElements = scheduleList.map(({ id, day, time }) => {
        return (
            <div key={id} className={styles["list"]}>
                <span className={styles["text"]}>{day}</span>
                <span className={styles["text"]}>{time}</span>
            </div>
        );
    });

    return (
        <CustomLink href={href} target={target} className={styles["item"]}>
            <img src={img} className={styles["img"]} alt="icon" />
            <p className={styles["name"]}>{name}</p>
            <div>
                {scheduleListElements}
            </div>
        </CustomLink>
    )
};

ScheduleItem.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
    scheduleList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}

export default ScheduleItem;