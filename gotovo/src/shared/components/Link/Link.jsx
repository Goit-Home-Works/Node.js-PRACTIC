import PropTypes from 'prop-types';

import Link from "next/link";
import { useRouter } from "next/router";

const CustomLink = ({ href, className, children, target }) => {
    const router = useRouter();
    return (
        <Link href={href} locale={router.locale}>
            <a className={className} target={target}>
                {children}
            </a>
        </Link>
    )
};

CustomLink.defaultProps = {
    target: '_self'
}

CustomLink.propTypes = {
    href: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    target: PropTypes.string
}

export default CustomLink;