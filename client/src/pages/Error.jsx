import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <>
            <section id="error-page">
                <div className="container content">
                    <h2 className="header">404</h2>
                    <h2>Sorry! page not found</h2>
                    <p>
                        Oops! It seems like the page you are looking access does not exist.
                        If you believe there's an issue, feel free to report it, and we'll
                        look into it.
                    </p>
                    <div className="btns">
                        <NavLink to="/">return home</NavLink>
                        <NavLink to="/contact">report problem</NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error;