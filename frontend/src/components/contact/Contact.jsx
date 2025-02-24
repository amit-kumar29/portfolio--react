import ContactForm from "./ContactForm";
import './Contact.css';

const Contact = () => {
    return (
        <div className='contactpage'>
            <section className="contact" id="contact">
                <h2 className="heading">Contact <span>Me!</span></h2>
                {<ContactForm />}
            </section>
        </div>
    );
}

export default Contact;
