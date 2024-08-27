import { useState } from "react";
// import { Navigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const inputHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value

        setUser({
            ...user,
            [name]: value
        })
    }

    // const navigate = Navigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // alert("Login success")
        try {
            const response = await fetch(`http://localhost:3000/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });


            if (response.ok) {
                alert("Login success");
                setUser({ email: "", password: "" });
                // navigate("/");
            } else {
                alert("invalid credentials")
            }
            console.log("login form", response);
        } catch (error) {

            console.log("login", error);
        }

    }
    return (
        <>
            <section>
                <main>
                    <div className="login1">
                        <div className="container grid grid-two-cols">
                            <div className="login-img">
                                <img
                                    src="/images/login.png"
                                    alt="register logo"
                                    width="600"
                                    height="500" />
                            </div>

                            <div className="login-form">
                                <h1 className="main-heading mb-3">Login form</h1>
                                <br />

                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="email"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            value={user.email}
                                            onChange={inputHandler}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="password"
                                            id="password"
                                            required
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={inputHandler}

                                        />
                                    </div>

                                    <br />
                                    <button type="submit" className="btn btn-submit">Register Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Login;