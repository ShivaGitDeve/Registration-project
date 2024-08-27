const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>We are the World Best IT Company</p>
                            <h1>Welcome to Our Page</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore consequuntur sapiente molestiae maxime aperiam a doloribus doloremque tempora, tenetur pariatur corrupti est. Quaerat atque minus eligendi nemo. Quisquam, voluptatem officiis
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">connect now</button>
                                </a>
                                <a href="/service">
                                    <button className="btn secondary-btn">learn now</button>
                                </a>
                            </div>
                        </div>
                        <div className="hero-img">
                            <img src="/images/home.png" alt="home" width='500' height='350' />
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

export default Home;