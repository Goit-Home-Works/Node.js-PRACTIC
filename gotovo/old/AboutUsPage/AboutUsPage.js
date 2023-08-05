const AboutUsPage = () => {
    return (
        <>
            <section className="about-us">
                <div className="container">
                    <div className="article">
                        <h3 className="article-heading">Про центр</h3>
                        <p className="article-text">
                            Документ-сервіс «ГОТОВО» - це сучасна установа, яка надає адміністративні послуги за
                            абсолютно новими підходами і принципами, швидко і зручно для кожного.
                        </p>
                        <br/>
                        <p className="article-text">
                            З повагою до людей!
                        </p>
                        <br/>
                        <p className="article-text">
                            Наша мета – знищити побутову корупцію в дозвільній сфері, спростити взаємини
                            громадян та держави, покращити якість життя українців шляхом надання швидких,
                            зручних та якісних адміністративних послуг.
                        </p>
                    </div>
                    <div className="about-us-gallery">
                        <div className="about-us-gallery-img _1"></div>
                        <div className="about-us-gallery-img _2"></div>
                        <div className="about-us-gallery-img _3"></div>
                        <div className="about-us-gallery-img _4"></div>
                    </div>
                </div>
                <img className="about-us-img _1" src="/imgimg/dots.png" alt=""/>
                <img className="about-us-img _2" src="/imgimg/dots.png" alt=""/>
            </section>
        </>
    );
};

export default AboutUsPage;