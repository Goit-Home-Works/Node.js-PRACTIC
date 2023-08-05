const Image = ({ link, imgWidth }) => {
    const [ imgLink, format ] = link.split('.');
    return (
        <picture>
            <source srcSet={`${imgLink}_${imgWidth}.webp`} />
            <img src={`${imgLink}_${imgWidth}.${format}`} alt="Image" className="custom-image" />
        </picture>
    )
};

export default Image;