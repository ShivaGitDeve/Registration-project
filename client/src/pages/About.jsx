import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <h1>Why Choose you?</h1>
                            <p>
                                Experties: Our consists of experienecd IT professionals who
                                are passionate about staying up-to-date with the latest industry
                                trends.
                            </p>
                            <br />
                            <p>
                                Customization: We are understanding the bussiness is unique.
                                That's why we cretaed that are tailored to your specific needs and goals.
                            </p>
                            <br />
                            <p>
                                Affordability: Count on us to be there when you need us.
                            </p>
                            <br />
                            <p>
                                Reliability: Count on us to be there when you need us. We are
                                commited to ensuing ourselves your IT environmentally is reliable and
                                avilable 24/7 days;
                            </p>
                            <br />
                            <div className="btn btn-group">
                                <NavLink to="/contact">
                                    <button className="btn">Connect now</button>
                                </NavLink>
                                <NavLink to="/service">
                                    <button className="brn secondary-btn">Learn more</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="hero-img">
                            <img
                                src="/images/about.png"
                                alt="about"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>50+</h2>
                        <p>Registered companies</p>
                    </div>
                    <div className="div1">
                        <h2>100,00+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                        <h2>500+</h2>
                        <p>Well known Developers</p>
                    </div>
                    <div className="div1">
                        <h2>24/7</h2>
                        <p>Services</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;