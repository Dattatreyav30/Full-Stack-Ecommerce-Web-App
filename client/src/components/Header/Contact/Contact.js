import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-paragraph">
        If you have any questions or inquiries, please feel free to contact us
        using the information below.
      </p>
      <ul className="contact-ul">
        <li>Email: example@example.com</li>
        <li>Phone: 123-456-7890</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
    </div>
  );
};

export default Contact;
