import { useState } from 'react';
import './Contact.css';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    emailSubject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="input-box">
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-box">
        <input
          type="number"
          id="contactNo"
          name="contactNo"
          placeholder="Contact No."
          value={formData.contactNo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="emailSubject"
          name="emailSubject"
          placeholder="Email Subject"
          value={formData.emailSubject}
          onChange={handleChange}
          required
        />
      </div>
      <textarea
        id="message"
        name="message"
        cols="30"
        rows="10"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <div className="btn">
        <input type="submit" value="Send Message" />
      </div>
    </form>
  );
};

export default ContactForm;
