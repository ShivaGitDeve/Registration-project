import { useState } from "react";

const defaultContact = {
    username: " ",
    email: " ",
    message: " "
}

const Contact = () => {
    const [contact, setContact] = useState(defaultContact)

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContact({
            ...contact,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // alert(contact);
        try {
            const response = await fetch("http://localhost:3000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            })
            if (response.ok) {
                setContact(defaultContact)
                const data = await response.json()
                console.log(data);
                alert("Message send successfully")
            }
        } catch (error) {
            alert("Message not send");
            console.error(error);
        }


    }

    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Contact us</h1>
                </div>
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/contact-us.png" alt="contact image" width='400' height='400' />
                    </div>

                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="username"
                                    required
                                    autocomplete="off"
                                    value={contact.username}
                                    onChange={handleInput}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="email"
                                    required
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                />
                            </div>
                            <div>
                                <label htmlFor="message">message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                    required
                                    autoComplete="off"
                                    value={contact.message}
                                    onChange={handleInput}
                                >
                                </textarea>
                            </div>
                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </section>
                </div>
                <section className="mb-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7024.868943478521!2d76.89355721458327!3d28.315450602954282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d394b1a0fece9%3A0x4b02a8908ad4bd57!2sPanchgaon%2C%20Haryana!5e0!3m2!1sen!2sin!4v1721914634474!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        allowfullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </section>
            </section>
            <footer>
                <div className="copyright">
                    <p>&copy;technical 2024</p>
                </div>
            </footer>
        </>
    )
}

export default Contact;