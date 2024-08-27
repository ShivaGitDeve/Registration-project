const Service = () => {
    return (
        <>
            <section className="section-services">
                <div className="container">
                    <h1 className="main-heading">Services</h1>
                </div>

                <div className="container grid grid-cols-3">
                    <div className="card">
                        <div className="card-img">
                            <img src="/images/card-img.png" alt="card img" width="250" />
                        </div>

                        <div className="card-details">
                            <div className="grid grid-cols-2">
                                <p>provider</p>
                                <p>price</p>
                            </div>
                            <h2>service</h2>
                            <p>description</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service;