// REACT:
import { useState } from 'react'

// CSS:
import styles from './Contact.module.css'

// CONTACT: 
export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess(false)
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                name, email, message
            }),
        })
            .then(() => {
                setSuccess(true)
                setName('')
                setEmail('')
                setMessage('')
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <div className={styles.contactHeaderBox}>
                <h1 className={styles.contactHeader} id="contact">Contact</h1>
            </div>
            <section className={styles.contact}>
                <div className={styles.contactMain}>
                    <div className={styles.contactLeft}>
                        <h2>Two heads are better than one!</h2>
                        <p>Interested in meeting via zoom or coffee? I'm always game for meeting new people who share similar
                            interests and goals. Whether you are looking to have a plus one on a project, a website you envision
                            to have built for your small business, or have questions about anything else really, I'd love to
                            chat!</p>
                        <a href="https://www.linkedin.com/in/mylesdeboer/" target="_blank" rel='noreferrer'><button className={styles.contactButtons}>View LinkedIn</button></a>
                        <a href="/Resume.pdf" download><button className={styles.contactButtons}>Download Resume</button></a>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.contactRight}>
                        <input type="hidden" name="form-name" value="contact" />
                        <input className={styles.contactInputNameEmail} type="text" placeholder="Name*" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
                        <input className={styles.contactInputNameEmail} type="text" placeholder="Email*" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <textarea className={styles.contactInputMessage} type="text" placeholder="Message*" name="message" rows="8"
                            required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            <div className={styles.sendMessageButtonBox}>
                                <button type='submit' className={styles.contactButtons}>Send Message</button>
                                <div>
                                    <div className={styles.messageSuccessMsgBox}>{success && "message sent"}</div>
                                </div>
                            </div>
                </form>
                </div>
            </section>
        </div>
    )
}


