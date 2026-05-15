import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


function Contact() {
    const form = useRef();
    const[message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.
            sendForm(
                "service_9h8l7qj",
                "template_1v0m5s9",
                form.current,
            {
                publicKey: "Zt9n2s8Xo5mLh3a7"
            }
        )
        .then(
            () => {
                setMessage("Message sent successfully!");
            }
        );
    };
    return (
        <section className="contact" id="contact">
            <h2>Contact Me</h2>
            
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Your Name" required />
                <input type="email" name="user_email" placeholder="Your Email" required />
                <textarea name="user_message" placeholder="Your Message" required></textarea>
                <button type="submit">Send</button> 
            </form>

            {message && <p>{message}</p>}
        </section>
           
    );
}

export default Contact;