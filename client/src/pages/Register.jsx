import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();

    const inputHandler = (e) => {
        console.log(e)
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(`http://localhost:3000/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            // console.log(response);
            const res_data = await response.json();
            console.log("response from server", res_data.extraDetails);
            if (response.ok) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: ""
                })
                navigate("/login");
            } else{
                alert(res_data.extraDetails)
            }
        } catch (error) {
            console.log("register", error);
        }
    };
    return (
        <>
            <section>
                <main>
                    <div className="registr1">
                        <div className="container grid grid-two-cols">
                            <div className="register-img">
                                <img
                                    src="/images/register1.png"
                                    alt="register logo"
                                    width="550"
                                    height="550" />
                            </div>

                            <div className="register-form">
                                <h1 className="main-heading mb-3">Registeration form</h1>
                                <br />

                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="username"
                                            id="username"
                                            required
                                            autoComplete="off"
                                            value={user.username}
                                            onChange={inputHandler}
                                        />
                                    </div>
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
                                        <label htmlFor="phone">phone</label>
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder="phone"
                                            id="phone"
                                            required
                                            autoComplete="off"
                                            value={user.phone}
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

export default Register;